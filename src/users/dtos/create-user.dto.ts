import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { LikeDTO } from "src/likes/dto/like-user.dto";
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
   @MaxLength(200)
   password: string;
   
   @IsOptional()
   profile: CreateProfileDto;

   @IsOptional()
   like: LikeDTO;
   
}