import { IPost } from '@lib/post/domain';

export type DeletePostDto = Pick<IPost, 'id'>;
