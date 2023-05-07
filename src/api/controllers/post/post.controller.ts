import { PostFacade } from '@lib/post/application-services';
import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './dto';
import { CurrentUser, ICurrentUser } from '@lib/auth';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { v4 as uuidv4 } from 'uuid';

@Controller('post')
export class PostController {
  constructor(private readonly postFacade: PostFacade) {}

  @Post()
  createPost(
    // @CurrentUser() user: ICurrentUser,
    @Body() createPostDto: CreatePostDto,
  ) {
    const test = randomStringGenerator();
    console.log('test', test);
    return this.postFacade.commands.createPost({
      ...createPostDto,
      authorId: test,
      // authorId: user.userId,
    });
  }
}
