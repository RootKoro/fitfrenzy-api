import {
  IsEmpty,
  IsNotEmpty,
  IsString,
  MaxLength
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({type: String})
  @IsString()
  email: string;

  @ApiProperty({type: String})
  @IsString()
  password: string;

  @ApiProperty({type: String})
  @IsNotEmpty()
  birthday: string;

  @ApiProperty({type: String})
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  firstname: string;

  @ApiProperty({type: String})
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  lastname: string;

  @ApiProperty({type: String})
  @IsString()
  @IsEmpty()
  sport: string;
}

