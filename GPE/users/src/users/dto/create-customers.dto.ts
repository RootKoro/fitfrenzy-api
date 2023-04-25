import {
    IsString,
    IsNumber,
    MaxLength,
    IsIn,
    IsOptional
  } from 'class-validator';

  import { CreateUserDto } from './create-user.dto';

  export class CreateCustomerDto extends CreateUserDto {
    @IsString()
    @IsIn(['Male', 'Female'])
    @IsOptional()
    gender: String;

    @IsNumber()
    @IsOptional()
    height: number;

    @IsNumber()
    @IsOptional()
    weight: number;

    @IsString()
    @IsOptional()
    illness: String[];

    @IsNumber()
    @IsOptional()
    exp: number;

    @IsString()
    @MaxLength(99)
    @IsOptional()
    level: String;

    @IsString()
    @IsOptional()
    preferences: String[];

  }