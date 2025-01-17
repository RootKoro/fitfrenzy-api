import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ExerciceService } from './exercice.service';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';

@Controller('exercices')
export class ExerciceController {
  constructor(private readonly exerciceService: ExerciceService) {}

  @Post()
  create(@Body() createExerciceDto: CreateExerciceDto) {
    return this.exerciceService.create(createExerciceDto);
  }

  @Get()
  findAll() {
    return this.exerciceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExerciceDto: UpdateExerciceDto) {
    return this.exerciceService.update(id, updateExerciceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciceService.remove(id);
  }
}
