import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category, Geo } from './types';
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

  // @Column({
  //   type: 'enum',
  //   enum: Category,
  // })
  // category: Category;

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

  // TODO:
  // @Column()
  // provider
}
