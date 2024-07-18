import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { PostsController } from './posts.controller';
import { Categories } from 'src/categories/categories.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, Categories]), AuthModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
