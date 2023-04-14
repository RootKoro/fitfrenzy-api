import { Module } from '@nestjs/common';
import { UserQuestionsService } from './user-questions.service';
import { UserQuestionsController } from './user-questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserQuestions, UserQuestionsSchema } from 'src/schemas/user-questions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserQuestions.name,
        schema: UserQuestionsSchema,
      },
    ]),
  ],
  controllers: [UserQuestionsController],
  providers: [UserQuestionsService]
})
export class UserQuestionsModule { }
