import { Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";

@Module({
    controllers : [UsersControllers]
})
export class UsersModule{

}