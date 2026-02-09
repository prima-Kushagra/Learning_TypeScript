import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
@Injectable()
export class TweetService {

    constructor(private readonly userService: UserService ,
       @InjectRepository(Tweet) private readonly tweetRepository : Repository<Tweet>
    ){}

    public async getTweets(userID:number){
    return  await this.tweetRepository.find({
        where: {user: {id : userID}},
        relations: {user:true}
     })
    }
    public async CreateTweet(createTweetDto : CreateTweetDto){
       //Find the user with the given userID from user table
   let user = await this.userService.FindUserByID(createTweetDto.userID);
       //Create a tweet
     let tweet = await this.tweetRepository.create({...createTweetDto,user:user!})

       // Save the tweet  
       return await this.tweetRepository.save(tweet);
    }
}
