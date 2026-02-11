import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { UserService } from 'src/users/users.service';
import authConfig from './config/auth.config'
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { HashingProvider } from './provider/hashing.provider';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { ActiveUserType } from 'src/interfaces/active-user-type.interface';
import { access } from 'fs';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
    constructor(

        @Inject(forwardRef(()=>UserService))
        private readonly userService : UserService,
        @Inject(authConfig.KEY)
        private readonly authConfiguration: ConfigType<typeof authConfig>,
    
        private readonly hashinProvider : HashingProvider,
    private readonly jwtService : JwtService){}

        isAuthenticated: Boolean = false;

       public async login(loginDto : LoginDto){
            //1. Find the user with useernmae
           let user = await this.userService.findUserByUsername(loginDto.username)

            //2. If user is available , compare the passwaord.
            let isEqual : boolean = false; 

           isEqual = await  this.hashinProvider.comparePassword(loginDto.password,user.password)

           if(!isEqual){
            throw new UnauthorizedException('Incorrect Password')
           }
            //3. The password Match

            //4. send the response
           return  this.generateToken(user);
            
        }
   
public async signup(createUserDto : CreateUserDTO){
   return await this.userService.createUser(createUserDto);
}

private async signToken<T>(userID : number , expiresIn : number , payload?:T){
   return  await this.jwtService.signAsync({
                sub: userID,
                ...payload

             
            },{
               secret : this.authConfiguration.secret,
               expiresIn : expiresIn,
               audience : this.authConfiguration.audience,
               issuer : this.authConfiguration.issuer
            });
}

private async generateToken(user : User){
 // Generate an acces token
const accessToken = await this.signToken<Partial<ActiveUserType>>(user.id ,this.authConfiguration.expiresIn, {email : user.email})
 //Genrate a refresh token 

  const refreshToken = await this.signToken(user.id,this.authConfiguration.Refreh_token_expiresIn);

  return {token : accessToken , refreshToken}
}

public async RefreshToken (refreshTokendto : RefreshTokenDto){
    //1. VERIFY the refresh token
    try {
 const {sub}  = await  this.jwtService.verifyAsync(refreshTokendto.refreshToken , {
    secret : this.authConfiguration.secret,
    audience : this.authConfiguration.audience,
    issuer:  this.authConfiguration.issuer
   })

    //2. find the user from db using user id

    const user = await this.userService.FindUserByID(sub);
    //3. generate an access token and refresh token
 if (!user) {
  throw new UnauthorizedException('User no longer exists');
}

return await this.generateToken(user);
}
catch(error) {
throw new UnauthorizedException(error);
}
}

    }
