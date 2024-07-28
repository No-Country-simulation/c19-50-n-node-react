import { ApiProperty } from '@nestjs/swagger';
import { Posts } from '../posts/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryName } from './interfaces/categories.interface';

@Entity('categories')
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: CategoryName.TREKKING,
    description: 'Post Category ',
  })
  @Column({
    type: 'enum',
    enum: CategoryName,
  })
  name: CategoryName;

  @OneToMany(() => Posts, (post) => post.category, { onDelete: 'CASCADE' })
  posts: Posts[];
}
