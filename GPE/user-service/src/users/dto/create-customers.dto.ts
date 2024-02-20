import {
    IsString,
    IsNumber,
    MaxLength,
    IsIn,
    IsOptional,
    IsBoolean
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

  export class CreateCustomerDto extends CreateUserDto {
    @ApiProperty({type: String})
    @IsString()
    @IsIn(['Male', 'Female'])
    @IsOptional()
    gender: String;

    @ApiProperty({type: Number})
    @IsNumber()
    @IsOptional()
    height: number;

    @ApiProperty({type: Number})
    @IsNumber()
    @IsOptional()
    weight: number;

    @ApiProperty({type: String})
    @IsString()
    @MaxLength(99)
    @IsOptional()
    mood: String = "energetic";

    @ApiProperty()
    @IsString()
    @IsOptional()
    illness: String[];

    @ApiProperty({type: Number})
    @IsNumber()
    @IsOptional()
    exp: number;

    @ApiProperty({type: String})
    @IsString()
    @MaxLength(99)
    @IsOptional()
    level: String;

    @ApiProperty()
    @IsString()
    @IsOptional()
    preferences: String[];

    @IsBoolean()
    @IsOptional()
    surveyAnswered: boolean = false;
  }
