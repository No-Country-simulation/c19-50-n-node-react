import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostDTO } from './dtos/create.dto';
import { UpdatePostDTO } from './dtos/update.dto';
import { Categories } from '../categories/categories.entity';
import { IPaginationOptions, paginate as p } from 'nestjs-typeorm-paginate';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
    private cloudinaryService: CloudinaryService,
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

  async create(postDTO: CreatePostDTO, image: Express.Multer.File) {
    const category = await this.categoriesRepository.findOneBy({
      id: postDTO.category,
    });

    if (!category) {
      throw new Error('Category not found');
    }

    const { latitude, longitude, ...rest } = postDTO;
    const result = await this.cloudinaryService.uploadFile(image);

    return await this.postsRepository.save({
      ...rest,
      category,
      geo: { latitude, longitude },
      image: result.url,
    });
  }

  async update(id: string, postDTO: UpdatePostDTO, image: Express.Multer.File) {
    let category: Categories | null;
    const { latitude, longitude, ...rest } = postDTO;
    let updatedPost: Partial<Posts> = { ...rest, category };

    if (latitude && longitude) {
      updatedPost.geo = { latitude, longitude };
    }

    if (postDTO.category) {
      console.log(postDTO.category);
      updatedPost.category = await this.categoriesRepository.findOneBy({
        id: postDTO.category,
      });

      if (!updatedPost.category) {
        throw new Error('Category not found');
      }
    }

    if (image) {
      const result = await this.cloudinaryService.uploadFile(image);
      updatedPost.image = result.url;
    }

    return await this.postsRepository.update(id, updatedPost);
  }

  async delete(id: string) {
    return await this.postsRepository.delete(id);
  }

  //! Not implemented
  // async deleteAllPosts() {
  //   const query = this.postsRepository.createQueryBuilder('post');
  //   try {
  //     return await query.delete().where({}).execute();
  //   } catch (error) {
  //     console.log(error);
  //     throw new BadRequestException();
  //   }
  // }
}
