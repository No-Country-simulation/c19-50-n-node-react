import {Entity, UpdateDateColumn, CreateDateColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Questions {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    content: string;
    
    @Column()
    answer: string;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    responded_at: Date;
    
    @Column()
    user_id: number;
    
    @Column()
    post_id: number;
    
}