import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Program, ProgramSchema } from 'src/schemas/program.schema';
// import { ExerciceService } from 'src/exercices/exercice.service';
import { ExerciceModule } from 'src/exercices/exercice.module';

@Module({
  imports: [
    ExerciceModule,
    MongooseModule.forFeature([
      {
        name: Program.name,
        schema: ProgramSchema,
      },
    ]),
  ],
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
