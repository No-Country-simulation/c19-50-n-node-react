import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../../orders/entities/order.entity';

@Entity({
  name: 'users',
})
export class User {
  @ApiProperty({
    example: '0a2fb884-62a7-4eb2-a66b-2e6660f4ef72',
    description: 'User ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'admin@holder.com',
    description: 'User email',
    uniqueItems: true,
  })
  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: 'true',
    description: 'Indicates if the user has verified their email',
    default: 'false',
  })
  @Column({
    type: 'bool',
    default: false,
  })
  emailVerified: boolean;

  @ApiProperty({
    example: 'passwordStronk2kinfinite**',
    description: 'User password',
  })
  @Column({
    type: 'text',
    select: false,
  })
  password: string;

  @ApiProperty({
    example: 'Alexis Bazan',
    description: 'User full name',
  })
  @Column({
    type: 'text',
  })
  fullName: string;

  @ApiProperty({
    example: 'https://avatars.githubusercontent.com/u/104113851?v=4',
    description: 'User avatar/profile image URL',
    nullable: true,
  })
  @Column({
    type: 'text',
  })
  image?: string;

  @ApiProperty({
    example: 'true',
    description: 'Indicates if the user account is active',
    default: true,
  })
  @Column({
    type: 'bool',
    default: true,
  })
  isActive: boolean;

  @ApiProperty({
    example: ['super-user', 'admin', 'user'],
    description: 'Roles assigned to the user',
    default: ['user'],
  })
  @Column({
    type: 'text',
    array: true,
    default: ['user'],
  })
  roles: string[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
