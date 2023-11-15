import {
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateExerciceDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    label: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    image_path: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    description: string;
  }
