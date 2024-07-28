import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { Posts } from '../../posts/posts.entity';

@Entity({ name: 'orders' })
export class Order {
  @ApiProperty({
    example: '0a2fb884-62a7-4eb2-a66b-2e6660f4ef72',
    description: 'Order ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '2024-07-19T10:23:45Z',
    description: 'Creation date of the order',
  })
  @Column({ type: 'timestamp' })
  created_at: Date;

  @ApiProperty({
    type: () => User,
    description: 'The user who placed the order',
  })
  @ManyToOne(() => User, (user) => user.orders, { onDelete: 'CASCADE' })
  user: User;

  @ApiProperty({
    type: () => Posts,
    description: 'The post related to the order',
  })
  @ManyToOne(() => Posts, (posts) => posts.orders)
  post: Posts;
}
