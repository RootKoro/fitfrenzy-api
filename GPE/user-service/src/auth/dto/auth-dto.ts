import {
  IsNotEmpty,
  IsString,
  MaxLength
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({type: String})
  @IsString()
  email: string;

  @ApiProperty({type: String})
  @IsString()
  password: string;
}

