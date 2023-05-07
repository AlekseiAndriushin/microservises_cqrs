import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetPostQueryHanlder } from './get-post/get-post.query-handler';

export const POST_QUERIES_HANDLERS: Type<IQueryHandler>[] = [
  GetPostQueryHanlder,
];
