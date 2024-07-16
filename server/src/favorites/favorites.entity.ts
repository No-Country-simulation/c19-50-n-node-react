import {Entity, Column, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
import {User} from "../auth/entities/user.entity";
import {Posts} from "../posts/posts.entity"; 

@Entity()
export class Favorites {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  userId: number;
  
  //@ManyToOne(() => User, (user) => user.favorites)
  @JoinColumn({ name: 'userId' })
  user: User
  
  @Column()
  postId: number;
  
  //@ManyToOne(() => Posts, (post) => post.favorites)
  @JoinColumn({ name: 'postId' })
  post: Posts

}
  