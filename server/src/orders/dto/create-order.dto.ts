import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: '2024-07-19T10:23:45Z',
    description: 'Creation date of the order',
  })
  @IsOptional()
  created_at?: Date;

  @ApiProperty({
    example: '6c29edde-2e98-42ee-9618-7a654cd88270',
    description: 'Post ID',
  })
  @IsNotEmpty()
  @IsUUID()
  post_id: string;
}
