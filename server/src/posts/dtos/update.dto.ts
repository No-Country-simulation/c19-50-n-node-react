import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  Validate,
} from 'class-validator';
import { IsGeoPair } from '../validators/geo.validators';

export class UpdatePostDTO {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  category: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsOptional()
  @IsDateString()
  date: Date;

  @IsOptional()
  @IsNumber()
  @Min(-90)
  @Max(90)
  @Type(() => Number)
  latitude: number;

  @IsOptional()
  @IsNumber()
  @Min(-180)
  @Max(180)
  @Type(() => Number)
  longitude: number;

  @IsOptional()
  @IsString()
  address: string;

  @Validate(IsGeoPair)
  geoPairCheck: any;
}
