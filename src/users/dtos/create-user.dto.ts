import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";

export class CreateUserDTO{

   @IsEmail()
   @IsNotEmpty()
   email : string;

    @MaxLength(24)
   @IsNotEmpty()
   username : string;
   
   
   @IsNotEmpty()
   @MinLength(8,{message: 'Password should be greater then 8 characters'})
   @MaxLength(20)
   password: string;
   
   @IsOptional()
   profile: CreateProfileDto;
   
}