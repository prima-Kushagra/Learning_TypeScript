import { Controller, Get, Param, Body, Post, Query , ParseIntPipe,ParseBoolPipe, DefaultValuePipe, ValidationPipe, Patch, Delete, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import { AuthorizeGuard } from "src/auth/guards/authorize.guard";

// http://localhost:3000/users/101

@Controller('users')
@UseGuards(AuthorizeGuard)
export class UsersControllers{
   constructor(private  userService: UserService)  {} // 3rd step for injectable


@Get()
getAllUsers(){
  return this.userService.getAllUsers();
}


@Get(':id')
getUserById(@Param('id',ParseIntPipe) id : number){
   return this.userService.FindUserByID(id);
}
// @Post()
     
//         createUser(@Body() user: CreateUserDTO){
//         this.userService.createUser(user);
//      }

@Delete(':id')
public deleteUser(@Param('id', ParseIntPipe) id : number){
   this.userService.deleteUser(id);

}
}