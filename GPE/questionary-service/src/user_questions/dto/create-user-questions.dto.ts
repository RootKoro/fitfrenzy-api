import {
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateUserQuestionsDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    id_user: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    id_question: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    response: string[];
  }
