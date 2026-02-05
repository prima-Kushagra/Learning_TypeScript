import { Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { UserService } from "./users.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers : [UsersControllers],
    providers : [UserService],
    exports: [UserService],
    imports: [TypeOrmModule.forFeature([User])] // for injectatblr 2nd step
})
export class UsersModule{

}