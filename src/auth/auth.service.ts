import { forwardRef, Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { UserService } from 'src/users/users.service';
import authConfig from './config/auth.config'
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(UserService)
        private readonly userService : UserService,
        @Inject(authConfig.KEY)
        private readonly authConfiguration: ConfigType<typeof authConfig>){}
   
public async signup(createUserDto : CreateUserDTO){
   return await this.userService.createUser(createUserDto);
}

    }
