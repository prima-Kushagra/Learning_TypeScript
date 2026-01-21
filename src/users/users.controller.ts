import { Controller, Get, Param, Body, Post, Query , ParseIntPipe, DefaultValuePipe, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDTO } from "./dtos/create-user.dto";

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
     
        createUser(@Body() user: CreateUserDTO){
        //this.userService.createUser(user);
        console.log(user instanceof CreateUserDTO );
        return  'A new User Has been created';
     }
}