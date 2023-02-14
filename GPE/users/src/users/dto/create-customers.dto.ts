import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
    IsIn
  } from 'class-validator';

  import { CreateUserDto } from './create-user.dto';

  export class CreateCustomerDto extends CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsIn(['Male', 'Female'])
    gender: string;

    @IsNotEmpty()
    birthday: string;

    @IsNumber()
    @IsNotEmpty()
    height: number;

    @IsNumber()
    @IsNotEmpty()
    weight: number;

    @IsString()
    illness: String[];

    @IsNumber()
    @IsNotEmpty()
    exp: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(99)
    level: string;

    @IsString()
    preferences: String[];

  }