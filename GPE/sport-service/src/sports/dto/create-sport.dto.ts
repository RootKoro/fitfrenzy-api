import {
  IsNotEmpty,
  IsString,
  IsNumber,
  MaxLength,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSportDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  label: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  category: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  difficulty: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(5)
  rate: number;

  @ApiProperty({ type: String })
  @IsString()
  @MaxLength(500)
  description: string;
}
