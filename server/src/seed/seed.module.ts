import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthModule } from '../auth/auth.module';
import { CategoriesModule } from '../categories/categories.module';
import { PostsModule } from '../posts/posts.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CategoriesModule, PostsModule, AuthModule],
})
export class SeedModule {}
