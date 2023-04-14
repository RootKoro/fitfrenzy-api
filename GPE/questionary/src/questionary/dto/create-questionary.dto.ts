import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';

  export class CreateQuestionaryDto {
    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    questions: string;
  }