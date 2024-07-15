import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostDTO } from './dtos/create.dto';
import { UpdatePostDTO } from './dtos/update.dto';
import { Categories } from 'src/categories/categories.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async findAll() {
    return await this.postsRepository.find({ relations: ['category'] });
  }

  async findOne(id: number) {
    return await this.postsRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  async create(postDTO: CreatePostDTO) {
    const category = await this.categoriesRepository.findOneBy({
      id: postDTO.category,
    });

    if (!category) {
      throw new Error('Category not found');
    }

    return await this.postsRepository.save({ ...postDTO, category });
  }

  async update(id: number, postDTO: UpdatePostDTO) {
    let category: Categories | null;
    let updatedPost: Partial<Posts> = { ...postDTO, category };

    if (postDTO.category) {
      updatedPost.category = await this.categoriesRepository.findOneBy({
        id: postDTO.category,
      });

      if (!category) {
        throw new Error('Category not found');
      }
    }

    return await this.postsRepository.update(id, updatedPost);
  }

  async delete(id: number) {
    return await this.postsRepository.delete(id);
  }
}
