import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostDTO } from './dtos/create.dto';
import { UpdatePostDTO } from './dtos/update.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
  ) {}

  async findAll() {
    return await this.postsRepository.find();
  }

  async findOne(id: number) {
    return await this.postsRepository.findOneBy({ id });
  }

  async create(postDTO: CreatePostDTO) {
    return await this.postsRepository.save(postDTO);
  }

  async update(id: number, postDTO: UpdatePostDTO) {
    return await this.postsRepository.update(id, postDTO);
  }
}
