import {
    IsNotEmpty,
    IsString,
    IsNumber
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateUserStatDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String})
    id_user: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String})
    habits: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String})
    preferences: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String})
    other_informations: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({type: Number})
    average_weekly_conn: number;
  }
