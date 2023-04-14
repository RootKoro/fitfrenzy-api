import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';

  export class CreateProgramDto {
    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    questions: string;
  }