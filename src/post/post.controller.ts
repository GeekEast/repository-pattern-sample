import {
  Body,
  Controller,
  Get,
  Inject,
  Post as PostMethod,
} from '@nestjs/common';
import RepositoryInterface from 'src/common.repo.interface';
import { CreatePostDto } from './dto/createPost.dto';
import Post from './post.model';

@Controller('post')
export class PostController {
  constructor(
    @Inject('PostRepository')
    private readonly postRepository: RepositoryInterface<Post>,
  ) {}

  @Get()
  async findAll() {
    return this.postRepository.all();
  }

  @PostMethod()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }
}
