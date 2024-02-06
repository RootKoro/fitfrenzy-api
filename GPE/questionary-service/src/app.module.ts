import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionaryModule } from './questionary/questionary.module';
import { UserQuestionsModule } from './user_questions/user-questions.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    QuestionaryModule,
    UserQuestionsModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService]
})
export class AppModule {}
