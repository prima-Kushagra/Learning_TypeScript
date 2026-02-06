import { Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { UserService } from "./users.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "src/profile/profile.entity";

@Module({
    controllers : [UsersControllers],
    providers : [UserService],
    exports: [UserService],
    imports: [TypeOrmModule.forFeature([User,Profile])] // for injectatblr 2nd step
})
export class UsersModule{

}