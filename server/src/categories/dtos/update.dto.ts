import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDTO {
  @ApiProperty({
    example: 'trekking',
    description: 'Name of category',
  })
  @IsOptional()
  @IsString()
  name: string;
}
