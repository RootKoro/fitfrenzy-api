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
import { SportGenerator } from 'src/utils/sport_generator';

@ApiTags('sports')
@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  create(@Body() createSportDto: CreateSportDto) {
    return this.sportsService.create(createSportDto);
  }

  @Post()
  async generateSport(@Body() infos: any) {
    let sp_gen = new SportGenerator(this.sportsService, infos.answers);
    let generated_sport = sp_gen.generateSport();

    return await fetch('http://localhost:3000/users/' + infos.id, {
      method: 'POST',
      body: JSON.stringify({
        sport: generated_sport,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
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
