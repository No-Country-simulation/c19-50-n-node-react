import {
  Entity,
  Column,
  JoinColumn,
  PrimaryColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { Posts } from '../posts/posts.entity';

@Entity()
export class Favorites {
  @PrimaryColumn()
  userId: string;

  @ManyToOne(() => User, (user) => user.favorites, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @PrimaryColumn()
  postId: string;

  @ManyToOne(() => Posts, (post) => post.favorites, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: Posts;
}
