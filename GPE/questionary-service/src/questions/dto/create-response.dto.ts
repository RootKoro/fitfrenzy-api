import {
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResponseDto {
  @ApiProperty({type: String})
  @IsNotEmpty()
  @IsString()
  question_id: string;

  @ApiProperty({type: String})
  @IsNotEmpty()
  @IsString()
  response: string;
}
