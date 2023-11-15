import { Module } from '@nestjs/common';
import { ExerciceService } from './exercice.service';
import { ExerciceController } from './exercice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Exercice, ExerciceSchema } from 'src/schemas/exercice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Exercice.name,
        schema: ExerciceSchema,
      },
    ]),
  ],
  controllers: [ExerciceController],
  providers: [ExerciceService]
})
export class ExerciceModule {}
