import {
    IsNotEmpty,
    IsString,
    IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

  export class CreateSportStatDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String})
    id_sport: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({type: Number})
    rank: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({type: Number})
    liked_by: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({type: Number})
    practiced_by: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String})
    other_informations: string;
}
