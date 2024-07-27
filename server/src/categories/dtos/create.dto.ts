import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CategoryName } from '../interfaces/categories.interface';

export class CreateCategoryDTO {
  @ApiProperty({
    example: CategoryName.TREKKING,
    description: 'Name of category',
    enum: CategoryName,
  })
  @IsNotEmpty()
  @IsString()
  name: CategoryName;
}
