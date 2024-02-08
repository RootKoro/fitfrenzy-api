import { Module } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { QuestionaryController } from './questionary.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Questionary, QuestionarySchema } from 'src/schemas/questionary.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Questionary.name,
        schema: QuestionarySchema,
      },
    ]),
  ],
  controllers: [QuestionaryController],
  providers: [QuestionaryService]
})
export class QuestionaryModule {}
