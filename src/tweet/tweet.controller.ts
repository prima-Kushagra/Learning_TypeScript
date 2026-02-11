import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDTO } from './dto/update-tweet.dto';
import { ActiveUser } from 'src/decorators/active-user.decorator';

// http://localhost:3000/tweet
@Controller('tweet')
export class TweetController {
    constructor(private tweetService : TweetService){}

    //https://localhost:3000/tweet/101
    @Get(':userid')
    public GetTweets(@Param('userid' ,ParseIntPipe) userid : number){
            return this.tweetService.getTweets(userid);
    }

    @Post()
    public CreateTweet(@Body() tweet: CreateTweetDto, @ActiveUser('email') user){
        console.log(user);
        // return this.tweetService.CreateTweet(tweet);
    }

    @Patch()
    public UpdateTweet(@Body() tweet: UpdateTweetDTO){
        this.tweetService.updateTweet(tweet);
    }
}
