import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AllowAnonymous } from 'src/decorators/allow-anaymous.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
//http://localhost:3000/auth/signup
@AllowAnonymous()
    @Post('signup')
     async signup(@Body() createUserDto : CreateUserDTO){
      return await this.authService.signup(createUserDto)
    }

    //http://localhost:3000/auth/login
    @AllowAnonymous()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto : LoginDto){
        return await this.authService.login(loginDto);
    }
}
