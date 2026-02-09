import { Injectable } from '@nestjs/common';
import { Repository , In } from 'typeorm';
import { HashTag } from './hashtag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHashTagDto } from './dto/create-hashtag.dto';
import { hash } from 'typeorm/browser/util/StringUtils.js';

@Injectable()
export class HashtagService {
        constructor(
        @InjectRepository(HashTag)
        private readonly hashtagRepository : Repository<HashTag>
    ){}

public async createHashtag(createHashtagDto: CreateHashTagDto){
    let hashtag  = this.hashtagRepository.create(createHashtagDto);

    return await this.hashtagRepository.save(hashtag);
}

public async findHashTag(hashtags:number[]){
  return await this.hashtagRepository.find({
    where: {id : In(hashtags)}
  })
}
}
