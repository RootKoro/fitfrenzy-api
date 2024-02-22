import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsArray,
  IsEmpty
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ExerciceDocument } from 'src/schemas/exercice.schema';

export class CreateProgramDto {
  @ApiProperty({type: String})
  @IsNotEmpty()
  @IsString()
  id_user: string;

  @ApiProperty({type: String})
  @IsNotEmpty()
  @IsString()
  difficulty: string;
  
  @ApiProperty({type: Array<String>})
  @IsNotEmpty()
  @IsArray()
  schedule: string[];

  @ApiProperty({type: Array<ExerciceDocument>})
  @IsNotEmpty()
  @IsArray()
  exercices: ExerciceDocument[];

  @ApiProperty({type: Boolean})
  @IsEmpty()
  @IsBoolean()
  done: boolean = false;
}
