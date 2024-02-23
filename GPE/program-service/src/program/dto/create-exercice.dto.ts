import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsArray } from 'class-validator';
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

  @ApiProperty({ type: Array<string> })
  @IsNotEmpty()
  @IsArray()
  sports: string[];

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsArray()
  level: string[];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  media_path: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: Boolean })
  @IsNotEmpty()
  @IsBoolean()
  chrono: boolean; /* Precises wether or not a chrono should be used for the exercice */

  @ApiProperty({ type: Number })
  @IsNumber()
  time_in_sec: number = 0; /* time in seconds */

  @ApiProperty({ type: Number })
  @IsNumber()
  reps: number = 0; /* number of repetition for the exercice, that is different of the number of series of the exercice */

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  rest: number; /* That is the time for rest (in seconds) after the exercice (wether between 2 series or before switching exercice) */

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  series: number; /* The number of time the exercice needs to be done (ex. 4 series of 10 push-ups) */
}
