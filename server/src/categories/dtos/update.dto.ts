import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CategoryName } from '../interfaces/categories.interface';

export class UpdateCategoryDTO {
  @ApiProperty({
    example: CategoryName.TREKKING,
    description: 'Name of category',
    enum: CategoryName,
  })
  @IsOptional()
  @IsString()
  name: CategoryName;
}
