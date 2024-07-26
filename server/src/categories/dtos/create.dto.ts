import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDTO {
  @ApiProperty({
    example: 'trekking',
    description: 'Name of category',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
