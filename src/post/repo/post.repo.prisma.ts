import RepositoryInterface from 'src/common.repo.interface';
import Post from '../post.model';

export default class PrismaPostRepository implements RepositoryInterface<Post> {
  async all(): Promise<Post[]> {
    // Prisma logic
    return;
  }

  async find(id: number): Promise<Post> {
    // Prisma logic
    return;
  }

  async create(data: object): Promise<Post> {
    // Prisma logic
    return;
  }
}
