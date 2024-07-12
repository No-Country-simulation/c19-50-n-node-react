import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category, Geo } from './types';

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

  @Column({
    type: 'enum',
    enum: Category,
  })
  category: Category;

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
