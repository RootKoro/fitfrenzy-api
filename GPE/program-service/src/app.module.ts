import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramModule } from './program/program.module';
import { UserProgramModule } from './user-program/user-questions.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ProgramModule,
    UserProgramModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService]
})
export class AppModule {}
