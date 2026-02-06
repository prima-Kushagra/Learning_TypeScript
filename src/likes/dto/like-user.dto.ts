import { IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";

export class LikeDTO {

    @IsBoolean()
    @IsOptional()
expression : boolean

 @IsString()
 @IsOptional()
 @MaxLength(100, {message: `Maximum supported length is 100`})
comment: string
}