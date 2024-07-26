import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Geo } from './types/posts.types';
import { Categories } from 'src/categories/categories.entity';
import { Order } from '../orders/entities/order.entity';
import { Questions } from 'src/questions/questions.entity';

@Entity('posts')
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  @OneToMany(() => Posts, (posts) => posts.orders)
  orders: Order[];

  @OneToMany(() => Posts, (posts) => posts.questions)
  questions: Questions[];
}
