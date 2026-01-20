import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UserService } from "./users.service";

// http://localhost:3000/users/

@Controller('users')
export class UsersControllers{
@Get()
     getUsers(@Query() queryString: any){
        const userService = new UserService();
        if(queryString.gender){
            return userService.getAllUsers().filter(u => u.gender ===queryString.gender)
        }
        return userService.getAllUsers();
     }
@Get(':id')
     getUserById(@Param('id') id :any){
        const userService = new UserService();
        return userService.getUserById(+id);
      
     }
@Post()
     createUser(){
        const user = {id:3 , name: 'Marry' , age:23 , gender:"Female" , isMarried : false }
        const userSer = new UserService();
        userSer.createUser(user);
        return  'A new User Has been created';
     }
}