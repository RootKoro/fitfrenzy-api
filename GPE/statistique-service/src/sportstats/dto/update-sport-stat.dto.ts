import { PartialType } from '@nestjs/mapped-types';
import { CreateSportStatDto } from './create-sport-stat.dto';

export class UpdateSportStatDto extends PartialType(CreateSportStatDto) {}
