import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDTO } from './dtos/create.dto';
import { UpdateCategoryDTO } from './dtos/update.dto';

export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async findAll() {
    return this.categoriesRepository.find();
  }

  async findOne(id: string) {
    return await this.categoriesRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
  }

  async create(categoryDTO: CreateCategoryDTO) {
    return await this.categoriesRepository.save(categoryDTO);
  }

  async update(id: string, postDTO: UpdateCategoryDTO) {
    return await this.categoriesRepository.update(id, postDTO);
  }

  async delete(id: string) {
    return await this.categoriesRepository.delete(id);
  }
}
