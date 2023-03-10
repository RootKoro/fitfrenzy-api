import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
    Min,
    Max,
  } from 'class-validator';

  export class CreateSportDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    label: string;
    
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Max(5)
    rate: number;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    difficulty: string;
    

    @IsString()
    @MaxLength(500)
    other_information: string
  }