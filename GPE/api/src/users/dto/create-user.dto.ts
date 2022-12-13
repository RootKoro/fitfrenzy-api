import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
  } from 'class-validator';

  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    firstname: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    lastname: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;
  }