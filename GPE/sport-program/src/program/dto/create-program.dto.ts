import {
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateProgramDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    program: string;
  }
