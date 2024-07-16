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
import { Geo } from '../types';

export class UpdatePostDTO {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  category: number;

  @IsOptional()
  @IsNumber()
  price: number;

  // TODO:
  @IsOptional()
  image: string;

  @IsOptional()
  @IsDateString()
  date: Date;

  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Geo)
  geo: Geo;

  @IsOptional()
  @IsString()
  address: string;

  // TODO:
  // @IsOptional()
  // @IsNumber()
  // provider: number;
}
