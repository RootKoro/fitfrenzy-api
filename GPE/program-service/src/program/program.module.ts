import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramService } from './program.service';
import { ExerciceService } from './exercice.service';
import { ProgramController } from './program.controller';
import { ExerciceController } from './exercice.controller';
import { Program, ProgramSchema } from 'src/schemas/program.schema';
import { Exercice, ExerciceSchema } from 'src/schemas/exercice.schema';

@Module({
  imports: [
    // ExerciceModule,
    MongooseModule.forFeature([
      {
        name: Program.name,
        schema: ProgramSchema,
      },
      {
        name: Exercice.name,
        schema: ExerciceSchema,
      },
    ]),
  ],
  controllers: [
    ProgramController,
    ExerciceController,
  ],
  providers: [
    ProgramService,
    ExerciceService,
  ],
})
export class ProgramModule {}
