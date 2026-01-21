import { Controller, Get, Param, Post, Query , ParseIntPipe, DefaultValuePipe } from "@nestjs/common";
import { UserService } from "./users.service";

// http://localhost:3000/users/101

@Controller('users')
export class UsersControllers{
   constructor(private readonly userService: UserService) {}
@Get()
     getUsers(@Query('limit' , new DefaultValuePipe(10),ParseIntPipe ) limit: number , 
     @Query('page' ,new DefaultValuePipe(1),  ParseIntPipe ) page : number){
        console.log(limit , page)
        return this.userService.getAllUsers();
     }
@Get(':id')
     getUserById(@Param('id' , ParseIntPipe) id: any){
      console.log(typeof id , id)
        return this.userService.getUserById(id);
        
     }
@Post()
     createUser(){
        const user = {id:3 , name: 'Marry' , age:23 , gender:"Female" , isMarried : false }
        this.userService.createUser(user);
        return  'A new User Has been created';
     }
}