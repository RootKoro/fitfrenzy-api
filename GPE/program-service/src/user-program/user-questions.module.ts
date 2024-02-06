import { Module } from '@nestjs/common';
import { UserProgramService } from './user-program.service';
import { UserProgramController } from './user-program.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProgram, UserProgramSchema } from 'src/schemas/user-program.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserProgram.name,
        schema: UserProgramSchema,
      },
    ]),
  ],
  controllers: [UserProgramController],
  providers: [UserProgramService]
})
export class UserProgramModule { }
