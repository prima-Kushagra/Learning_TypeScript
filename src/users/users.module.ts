import { Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { UserService } from "./users.service";

@Module({
    controllers : [UsersControllers],
    providers : [UserService] // for injectatblr 2nd step
})
export class UsersModule{

}