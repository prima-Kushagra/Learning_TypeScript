import { IsString , IsNotEmpty , IsOptional, IsInt, IsArray } from "class-validator";
import { User } from "src/users/user.entity";

export class CreateTweetDto{
    @IsNotEmpty()
    @IsString()
    text: string;


    @IsOptional()
    image?: string;
    
    @IsNotEmpty()
    @IsInt()
    userID : number;

@IsOptional()
@IsInt({each:true})
@IsArray()
    hashtag?: number[]
}