import { Transform, Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Category, Geo } from '../types';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  @IsEnum(Category)
  category: Category;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  // TODO:
  @IsOptional()
  image: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Geo)
  geo: Geo;

  @IsNotEmpty()
  @IsString()
  address: string;

  // TODO:
  // @IsNotEmpty()
  // @IsNumber()
  // provider: number;
}
