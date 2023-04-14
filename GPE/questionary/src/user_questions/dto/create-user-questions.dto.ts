import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';

  export class CreateUserQuestionsDto {
    @IsNotEmpty()
    @IsString()
    id_user: string;

    @IsNotEmpty()
    @IsString()
    id_question: string;
  }