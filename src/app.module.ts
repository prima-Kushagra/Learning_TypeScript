import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UsersModule, TweetModule, AuthModule ,TypeOrmModule.forRootAsync({
    imports:[],
    inject: [],
   useFactory: () => ({
     type: 'postgres',
    entities: [User],
    synchronize: true,
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : 'Kushagr@123',
    database : 'nestJS'
   })
  }), ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
