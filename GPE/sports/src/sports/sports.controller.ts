import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SportsService } from './sports.service';
import { UpdateSportDto } from './dto/update-sport.dto';
import { CreateSportDto } from './dto/create-sport.dto';


@ApiTags('sports')
@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  create(@Body() createSportDto: CreateSportDto) {
    return this.sportsService.create(createSportDto);
  }

  @Get()
  findAll() {
    return this.sportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSportDto: UpdateSportDto) {
    return this.sportsService.update(id, updateSportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportsService.remove(id);
  }
}