import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostQuery } from './get-post.query';
import { PostAggregate } from '@lib/post/domain';
import { PostRepository } from '@lib/post/providers';
import { Logger } from '@nestjs/common';

@QueryHandler(GetPostQuery)
export class GetPostQueryHanlder
  implements IQueryHandler<GetPostQuery, PostAggregate>
{
  constructor(private readonly postRepository: PostRepository) {}

  private readonly logger = new Logger(GetPostQueryHanlder.name);

  async execute({ id }: GetPostQuery): Promise<PostAggregate> {
    const existPost = await this.postRepository.findOne(id).catch((err) => {
      this.logger.error(err);
      return null as PostAggregate;
    });
    return existPost;
  }
}
