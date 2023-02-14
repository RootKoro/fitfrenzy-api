import {
    IsNotEmpty,
    IsString,
    IsNumber
  } from 'class-validator';

  export class CreateUserStatDto {
    @IsString()
    @IsNotEmpty()
    id_user: string;

    @IsString()
    @IsNotEmpty()
    habits: string;

    @IsString()
    @IsNotEmpty()
    preferences: string;

    @IsString()
    @IsNotEmpty()
    other_informations: string;

    @IsNumber()
    @IsNotEmpty()
    average_weekly_conn: number;
  }