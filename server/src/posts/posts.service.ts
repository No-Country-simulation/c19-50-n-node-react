import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostDTO } from './dtos/create.dto';
import { UpdatePostDTO } from './dtos/update.dto';
import { Categories } from 'src/categories/categories.entity';
import { IPaginationOptions, paginate as p } from 'nestjs-typeorm-paginate';

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

  async paginate(options: IPaginationOptions) {
    const queryBuilder = this.postsRepository.createQueryBuilder('c');

    queryBuilder
      .leftJoinAndSelect('c.category', 'category')
      .orderBy('c.created_at', 'DESC');

    return await p(queryBuilder, options);
  }

  async findOne(id: string) {
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

  async update(id: string, postDTO: UpdatePostDTO) {
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

  async delete(id: string) {
    return await this.postsRepository.delete(id);
  }
}
