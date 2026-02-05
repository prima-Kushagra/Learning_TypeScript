import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength, IsDate } from "class-validator";

export class CreateProfileDto{

   @IsString({message : 'FirstName should be string'})
   @IsNotEmpty()
   @IsOptional()
   @MinLength(3 , {message: 'FirstName should have 3 characters.'})
   @MaxLength(100)
   firstName ?: string;

     @IsString({message : 'LastName should be string'})
   @IsNotEmpty()
   @IsOptional()
   @MinLength(3 , {message: 'LastName should have 3 characters.'})
   @MaxLength(100)
   lastName ?: string;

   @IsString()
   @IsOptional()
    @MaxLength(10)
   gender ?: string;
   
   @IsOptional()
   @IsDate()
   dateOfBirth?: Date;

   @IsString()
   @IsOptional()
   Bio: string;

   @IsString()
   @IsOptional()
   profileImage: string;
}