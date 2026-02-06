import { Controller } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikeDTO } from './dto/like-user.dto';
@Controller('likes')
export class LikesController {}
