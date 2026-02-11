import { forwardRef, Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { UserService } from "./users.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "src/profile/profile.entity";
import { Likes } from "src/likes/likes.entity";
import { AuthModule } from "src/auth/auth.module";


@Module({
    controllers : [UsersControllers],
    providers : [UserService,
     ],
    exports: [UserService],
    imports: [forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([User,Profile,Likes]),
    ] // for injectatblr 2nd step
})
export class UsersModule{

}