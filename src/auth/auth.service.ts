import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { UserService } from 'src/users/users.service';
import authConfig from './config/auth.config'
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { HashingProvider } from './provider/hashing.provider';

@Injectable()
export class AuthService {
    constructor(

        @Inject(forwardRef(()=>UserService))
        private readonly userService : UserService,
        @Inject(authConfig.KEY)
        private readonly authConfiguration: ConfigType<typeof authConfig>,
    
        private readonly hashinProvider : HashingProvider){}

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
            return {
                data:user,
                success:true,
                message : 'User logged in successfully'
            };
        }
   
public async signup(createUserDto : CreateUserDTO){
   return await this.userService.createUser(createUserDto);
}

    }
