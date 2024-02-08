import {
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({type: String})
  @IsNotEmpty()
  @IsString()
  questionary_type: string; // short | long

  @ApiProperty({type: String})
  @IsNotEmpty()
  @IsString()
  question: string;
}
