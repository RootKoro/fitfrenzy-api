import {
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateQuestionaryDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    questions: string;
  }
