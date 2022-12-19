import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { PostController } from './post.controller';
import Post from './post.model';
import KnexPostRepository from './repo/post.repo.knex';

@Module({
  imports: [ObjectionModule.forFeature([Post])],
  controllers: [PostController],
  // control the injected dependency
  providers: [{ provide: 'PostRepository', useClass: KnexPostRepository }],
})
export class PostModule {}
