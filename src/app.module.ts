import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';
import { LikesController } from './likes/likes.controller';
import { LikesService } from './likes/likes.service';
import { LikesModule } from './likes/likes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HashtagController } from './hashtag/hashtag.controller';
import { HashtagModule } from './hashtag/hashtag.module';
@Module({
  imports: [
    UsersModule, 
    TweetModule, 
    AuthModule ,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: '.env'

    }),
    TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject: [ConfigService],
   useFactory: (configService : ConfigService) => ({
     type: 'postgres',
    // entities: [User],
    autoLoadEntities:true,
    synchronize: true,
    host : configService.get('DB_HOST'),
    port : configService.get('DB_PORT'),
    username : configService.get('DB_USERNAME'),
    password : configService.get('DB_PASSWORD'),
    database : configService.get('DB_NAME'),
   })
  }), ProfileModule, LikesModule, HashtagModule],
  controllers: [AppController, LikesController, HashtagController],
  providers: [AppService, LikesService],
})
export class AppModule {}
