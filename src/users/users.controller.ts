import { Controller, Get, Param, Body, Post, Query , ParseIntPipe,ParseBoolPipe, DefaultValuePipe, ValidationPipe, Patch } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";

// http://localhost:3000/users/101

@Controller('users')
export class UsersControllers{
   constructor(private  userService: UserService)  {} // 3rd step for injectable


@Get()
getAllUsers(){
  return this.userService.getAllUsers();
}


@Post()
     
        createUser(@Body() user: CreateUserDTO){
        this.userService.createUser(user);
     }

}