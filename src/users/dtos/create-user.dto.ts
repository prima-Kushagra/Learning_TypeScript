import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDTO{
   id : number;

   @IsString({message : 'Name should be string'})
   @IsNotEmpty()
   @MinLength(3 , {message: 'Name should have 3 characters.'})
   name : string;

   @IsString()
   @IsOptional()
   gender : string;

   @IsEmail()
   email : string;
   
   
   isMarried : boolean;
}