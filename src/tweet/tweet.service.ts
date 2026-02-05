import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
@Injectable()
export class TweetService {

    constructor(private readonly userService: UserService){}
}
