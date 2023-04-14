import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';

  export class CreateUserProgramDto {
    @IsNotEmpty()
    @IsString()
    id_user: string;

    @IsNotEmpty()
    @IsString()
    id_program: string;
  }