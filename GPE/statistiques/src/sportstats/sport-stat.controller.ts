import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SportStatService } from './sport-stat.service';
import { CreateSportStatDto } from './dto/create-sport-stat.dto';
import { UpdateSportStatDto } from './dto/update-sport-stat.dto';

@Controller('sport-stats')
export class SportStatController {
  constructor(private readonly sportStatService: SportStatService) {}

  @Post()
  create(@Body() createSportStatDto: CreateSportStatDto) {
    return this.sportStatService.create(createSportStatDto);
  }

  @Get()
  findAll() {
    return this.sportStatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportStatService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSportStatDto: UpdateSportStatDto) {
    return this.sportStatService.update(id, updateSportStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportStatService.remove(id);
  }
}