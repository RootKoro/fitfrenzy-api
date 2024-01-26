import {
  Controller,
  Get,
  Inject,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramGenerator } from '../utils/program_generator';
import { UpdateProgramDto } from './dto/update-program.dto';
import { ExerciceService } from '../exercices/exercice.service';


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
      );

      const programs = await pg.generatePrograms();
      programs.forEach((program) => this.programService.create(program));
      return { success: true, message: 'Programs created successfully' };
    } catch (error) {
      return { success: false, message: 'Error creating programs' };
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    return this.programService.update(id, updateProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programService.remove(id);
  }
}
