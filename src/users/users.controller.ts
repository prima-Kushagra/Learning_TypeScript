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
getUsers(
  @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Param('isMarried') param: GetUserParamDto
) {
  console.log(param);
  return this.userService.getAllUsers();
}

@Get(':id')
     getUserById(@Param('id' , ParseIntPipe) id: any){
      console.log(typeof id , id)
        return this.userService.getUserById(id);
        
     }
@Post()
     
        createUser(@Body() user: CreateUserDTO){
        //this.userService.createUser(user);
        console.log(user instanceof CreateUserDTO );
        return  'A new User Has been created';
     }

@Patch()
      updateUser(@Body() body : UpdateUserDTO){
        console.log(body)
        return `User updated successfully`
      }
}