import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Geo } from './types/posts.types';
import { Categories } from 'src/categories/categories.entity';

@Entity('posts')
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  address: string;

  @Column('text')
  content: string;

  @ManyToOne(() => Categories, (category) => category.posts)
  @JoinColumn({ name: 'category_id' })
  category: Categories;

  @Column('int')
  price: number;

  @Column()
  image: string;

  @Column('date')
  date: Date;

  @Column('json')
  geo: Geo;

  @CreateDateColumn()
  created_at: Date;

  // TODO:
  // @Column()
  // provider
}
