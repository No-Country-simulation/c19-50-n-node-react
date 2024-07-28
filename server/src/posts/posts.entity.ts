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
import { Categories } from '../categories/categories.entity';
import { Order } from '../orders/entities/order.entity';
import { Questions } from '../questions/questions.entity';
import { Favorites } from '../favorites/favorites.entity';

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

  @ManyToOne(() => Categories, (category) => category.posts, {
    onDelete: 'CASCADE',
  })
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
  @OneToMany(() => Posts, (posts) => posts.orders, { onDelete: 'CASCADE' })
  orders: Order[];

  @OneToMany(() => Posts, (posts) => posts.questions, { onDelete: 'CASCADE' })
  questions: Questions[];
  @OneToMany(() => Favorites, (favorites) => favorites.post, {
    onDelete: 'CASCADE',
  })
  favorites: Favorites[];
}
