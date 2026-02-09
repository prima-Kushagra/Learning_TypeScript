import { Body, Controller, Post } from '@nestjs/common';

import { CreateHashTagDto } from './dto/create-hashtag.dto';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {
    constructor(private readonly hashtagService : HashtagService){}

    @Post()
  public CreateNewHashtag(@Body() CreateHashTagDto:CreateHashTagDto){
  return this.hashtagService.createHashtag(CreateHashTagDto);
  }
}
