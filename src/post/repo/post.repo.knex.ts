import { Inject } from '@nestjs/common';
import RepositoryInterface from 'src/common.repo.interface';
import Post from 'src/post/post.model';

export default class KnexPostRepository implements RepositoryInterface<Post> {
  constructor(@Inject(Post) private readonly postModel: typeof Post) {}

  async all(): Promise<Post[]> {
    return this.postModel.query();
  }

  async find(id: number): Promise<Post> {
    return this.postModel.query().where('id', id).first();
  }

  async create(data: object): Promise<Post> {
    return this.postModel.query().insert(data);
  }
}
