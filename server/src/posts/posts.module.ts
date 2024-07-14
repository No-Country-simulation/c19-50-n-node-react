import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { PostsController } from './posts.controller';
import { Categories } from 'src/categories/categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, Categories])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
