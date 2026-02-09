import { Module } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { HashTag } from './hashtag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagController } from './hashtag.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HashTag])],
  controllers: [HashtagController],
  providers: [HashtagService],
  exports: [HashtagService], // optional
})
export class HashtagModule {}

