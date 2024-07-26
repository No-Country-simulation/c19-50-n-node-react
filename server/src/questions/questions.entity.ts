import { User } from "src/auth/entities/user.entity";
import {Entity, UpdateDateColumn, CreateDateColumn, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne, JoinColumn} from "typeorm";
import { Posts } from "src/posts/posts.entity";
@Entity()
export class Questions {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    content: string;
    
    @Column({nullable: true})
    answer?: string;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    responded_at: Date;
    
    @Column()
    userId: string;
    
    @Column()
    postId: string;

    @ManyToOne(() => User, user => user.questions)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Posts, post => post.questions)
    @JoinColumn({ name: 'postId' })
    post: Posts;

}