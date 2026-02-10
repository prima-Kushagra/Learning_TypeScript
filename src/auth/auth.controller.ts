import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
//http://localhost:3000/auth/signup
    @Post('signup')
     async signup(@Body() createUserDto : CreateUserDTO){
      return await this.authService.signup(createUserDto)
    }
}
