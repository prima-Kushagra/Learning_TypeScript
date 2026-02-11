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
import  appConfig  from './config/app.config';
import databaseConfig from './config/database.config';
import { APP_GUARD } from '@nestjs/core';
import { AuthorizeGuard } from './auth/guards/authorize.guard';
import authConfig from './auth/config/auth.config';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UsersModule, 
    TweetModule, 
    AuthModule ,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: '.env',
      load : [appConfig,databaseConfig]

    }),ConfigModule.forFeature(authConfig),
    JwtModule.registerAsync(authConfig.asProvider()),
    TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject: [ConfigService],
   useFactory: (configService : ConfigService) => ({
     type: 'postgres',
    // entities: [User],
    autoLoadEntities:configService.get('database.autoLoadEntities'),
    synchronize: configService.get('database.syncronize'),
    host : configService.get('database.host'),
    port : configService.get('database.port'),
    username : configService.get('database.username'),
    password : configService.get('database.password'),
    database : configService.get('database.name'),
   })
  }), ProfileModule, LikesModule, HashtagModule],
  controllers: [AppController, LikesController, HashtagController],
  providers: [AppService, LikesService,{
          provide :  APP_GUARD,
          useClass : AuthorizeGuard}],
})
export class AppModule {}
