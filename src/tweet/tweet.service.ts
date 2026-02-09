import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';
import { UpdateTweetDTO } from './dto/update-tweet.dto';
@Injectable()
export class TweetService {

    constructor(private readonly userService: UserService ,
                private readonly hashTagservice : HashtagService,
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
    
       let hashtag =await this.hashTagservice.findHashTag(createTweetDto.hashtag!)

       let tweet = await this.tweetRepository.create({...createTweetDto,user:user!,hashtag});


       // Save the tweet  
       return await this.tweetRepository.save(tweet);
    }

public async updateTweet(updateTweetDto: UpdateTweetDTO) {
    // Find the tweet by id
    const tweet = await this.tweetRepository.findOneBy({ id: updateTweetDto.id });
    
    if (!tweet) {
        throw new NotFoundException(`Tweet with ID ${updateTweetDto.id} not found`);
    }

    // Update only the text property
    if (updateTweetDto.text !== undefined) {
        tweet.text = updateTweetDto.text;
    }

    // Save and return
    return await this.tweetRepository.save(tweet);
} }

