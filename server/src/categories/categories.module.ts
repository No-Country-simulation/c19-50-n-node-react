import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Categories]), AuthModule],
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [CategoriesModule, TypeOrmModule],
})
export class CategoriesModule {}
