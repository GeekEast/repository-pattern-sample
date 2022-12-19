import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    ObjectionModule.register({
      config: {
        client: 'pg',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          port: 5432,
          user: 'postgres',
          password: 'postgres',
          database: 'nest-repository-pattern',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
