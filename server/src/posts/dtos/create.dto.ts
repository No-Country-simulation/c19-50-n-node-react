import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Geo } from '../types';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsNumber()
  category: number;

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
