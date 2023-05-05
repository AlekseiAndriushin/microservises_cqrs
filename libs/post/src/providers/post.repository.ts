import { IPost, PostAggregate } from '../domain';

export abstract class Repository {
  abstract save(post: IPost): Promise<PostAggregate>;
  abstract findOne(id: string): Promise<PostAggregate | null>;
  abstract findAll(): Promise<[[PostAggregate], number]>;
  abstract delete(id: string): Promise<boolean>;
}
