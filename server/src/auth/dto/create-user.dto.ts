import { ApiProperty } from '@nestjs/swagger';
import {
  // IsArray,
  IsEmail,
  // IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
// import { ValidRoles } from '../interfaces';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@domain.com',
    description: 'The email address of the user',
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    example: 'Password123!',
    description:
      'The password of the user. Must contain uppercase, lowercase, and a number.',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @ApiProperty({
    example: 'Alexis Bazan',
    description: 'The full name of the user',
  })
  @IsNotEmpty()
  @MinLength(1)
  @IsString()
  fullName: string;

  @ApiProperty({
    example: 'https://avatars.githubusercontent.com/u/104113851?v=4',
    description: 'The profile image URL of the user',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  //TODO: Eliminar este campo, usarlo con fines de crear seedUser
  // @ApiProperty({
  //   example: ['user', 'admin', 'super-user'],
  //   description: 'Roles assigned to the user',
  //   enum: ValidRoles,
  //   isArray: true,
  //   required: false,
  // })
  // @IsEnum(ValidRoles, { each: true })
  // @IsArray()
  // @IsOptional()
  // roles?: ValidRoles[];
}
