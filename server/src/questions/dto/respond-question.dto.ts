import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class RespondQuestionDto {
  
  @ApiProperty()
  @IsNotEmpty()
  answer: string;

}