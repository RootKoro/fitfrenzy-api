import {
  Controller,
  Get,
  Inject,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ExerciceService } from './exercice.service';
import { ProgramService } from './program.service';
import { ProgramGenerator } from '../utils/program_generator';
import { UpdateProgramDto } from './dto/update-program.dto';
import { ProgramDocument } from 'src/schemas/program.schema';
import { ExerciceDocument } from 'src/schemas/exercice.schema';


@Controller('programs')
export class ProgramController {
  constructor(
    @Inject(ExerciceService)
    private readonly exerciceService: ExerciceService,
    @Inject(ProgramService)
    private readonly programService: ProgramService,
  ) {}

  @Post()
  async create(@Body() infos: any) {
    try {
      const pg = new ProgramGenerator(
        infos.schedule,
        infos.sport,
        this.exerciceService,
        infos.userLevel,
        infos.id_user,
      );

      const programs = await pg.generatePrograms();
      programs.forEach((program) => this.programService.create(program));
      return { success: true, message: 'Programs created successfully' };
    } catch (error) {
      return { success: false, message: 'Error while creating programs' };
    }
  }

  @Get()
  findAll() {
    return this.programService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programService.findOne(id);
  }

  @Get('/by-user/:id_user')
  async findByUser(@Param('id_user') id_user: string) {
    let prgs = await this.programService.findByUserId(id_user);
    let prg = prgs.pop();
    return prg;
  }

  @Patch('schedule/:id')
  updateSchedule(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    return this.programService.update(id, updateProgramDto);
  }

  @Patch('mood/:mood/:id')
  async updateMood(@Param('mood') mood: string, @Param('id') id: string, @Body() infos: any) {
    try {
      const pg = new ProgramGenerator(
        infos.schedule,
        infos.sport,
        this.exerciceService,
        infos.userLevel,
        infos.id_user,
      )

      let program: ProgramDocument = await this.programService.findOne(id);
      let exercises: ExerciceDocument[] = await pg.selectExerciceByMood(mood);

      program.exercices = exercises
      return this.programService.update(id, program);
    } catch (error) {
      return { success: false, message: 'Error while updating program' };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programService.remove(id);
  }
}
