import {
    IsNotEmpty,
    IsString,
    MaxLength,
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateAdviceDto {
    @ApiProperty({type: String})
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    label: string;
    
    @ApiProperty({type: String})
    @IsString()
    @IsNotEmpty()
    advice: number;
  }
