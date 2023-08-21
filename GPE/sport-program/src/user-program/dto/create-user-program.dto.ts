import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateUserProgramDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    id_user: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsString()
    id_program: string;
  }
