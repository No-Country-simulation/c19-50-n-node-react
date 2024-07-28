import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { Categories } from '../categories/categories.entity';
import { initialData } from './data/seed-data';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Categories)
    private readonly categoryRepository: Repository<Categories>,
    private readonly postService: PostsService,
  ) {}
  async runSeed() {
    await this.deleteTables();
    const adminUser = await this.insertNewUsers();
    await this.insertNewCategories();
    await this.insertNewPosts(adminUser);
    return 'Seed Executed!';
  }

  private async deleteTables() {
    await this.postService.deleteAllPosts();

    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();

    const queryBuilder2 = this.categoryRepository.createQueryBuilder();
    await queryBuilder2.delete().where({}).execute();
  }

  private async insertNewUsers() {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach((user) => {
      users.push(this.userRepository.create(user));
    });

    const dbUser = await this.userRepository.save(seedUsers);

    return dbUser[0];
  }

  private async insertNewCategories() {
    const seedCategories = initialData.categories;

    const categories: Categories[] = [];

    seedCategories.forEach((category) => {
      categories.push(this.categoryRepository.create(category));
    });

    const dbCategory = await this.categoryRepository.save(seedCategories);

    return dbCategory[0];
  }

  private async insertNewPosts(user: User) {
    await this.postService.deleteAllPosts();

    const seedPosts = initialData.posts;

    const insertPromises = [];

    seedPosts.forEach((post) => {
      return this.postService.create(post, null); // o un objeto de tipo `Express.Multer.File`
    });

    await Promise.all(insertPromises);
  }
}
