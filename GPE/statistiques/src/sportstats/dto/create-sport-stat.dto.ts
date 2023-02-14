import {
    IsNotEmpty,
    IsString,
    IsNumber,
  } from 'class-validator';

  export class CreateSportStatDto {
    @IsNotEmpty()
    @IsString()
    id_sport: string;

    @IsNotEmpty()
    @IsNumber()
    rank: number;

    @IsNotEmpty()
    @IsNumber()
    liked_by: number;

    @IsNotEmpty()
    @IsNumber()
    practiced_by: number;

    @IsNotEmpty()
    @IsString()
    other_informations: string;
  }