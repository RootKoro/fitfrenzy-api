import {
    IsNotEmpty,
    IsString,
    IsEnum,
    ValidateNested
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
}

class Option {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsString()
  icon?: string;
}

export class CreateQuestionDto {
  @IsEnum(QuestionType)
  type: string;

  @ApiProperty({type: String})
  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Option)
  options: Option[];

}
