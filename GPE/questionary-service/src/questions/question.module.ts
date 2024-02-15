import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { Question, QuestionSchema } from 'src/schemas/question.schema';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { Response, ResponseSchema } from 'src/schemas/response.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Question.name,
        schema: QuestionSchema,
      },
      {
        name: Response.name,
        schema: ResponseSchema,
      }
    ]),
  ],
  controllers: [QuestionController, ResponseController],
  providers: [QuestionService, ResponseService]
})
export class QuestionModule { }
