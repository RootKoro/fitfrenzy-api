import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciceDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  label: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  type: string; /* Warm up / exercice / streching */

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  sports: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  level: number;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  image_path: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  description: string;
}
