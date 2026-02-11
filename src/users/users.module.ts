import { forwardRef, Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { UserService } from "./users.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "src/profile/profile.entity";
import { Likes } from "src/likes/likes.entity";
import { AuthModule } from "src/auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import authConfig from "src/auth/config/auth.config";
import { JwtModule } from "@nestjs/jwt";

@Module({
    controllers : [UsersControllers],
    providers : [UserService, ],
    exports: [UserService],
    imports: [forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([User,Profile,Likes]),
    ConfigModule.forFeature(authConfig),
JwtModule.registerAsync(authConfig.asProvider())] // for injectatblr 2nd step
})
export class UsersModule{

}