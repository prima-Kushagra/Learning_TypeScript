import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO{

   @IsString({message : 'FirstName should be string'})
   @IsNotEmpty()
   @MinLength(3 , {message: 'FirstName should have 3 characters.'})
   @MaxLength(100)
   firstName : string;

     @IsString({message : 'LastName should be string'})
   @IsNotEmpty()
   @MinLength(3 , {message: 'LastName should have 3 characters.'})
   @MaxLength(100)
   lastName : string;

   @IsString()
   @IsOptional()
    @MaxLength(10)
   gender : string;

   @IsEmail()
   @IsNotEmpty()
   email : string;
   
   @IsNotEmpty()
   @MinLength(8,{message: 'Password should be greater then 8 characters'})
   @MaxLength(20)
   password: string;
   
}