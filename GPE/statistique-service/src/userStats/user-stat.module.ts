import { Module } from '@nestjs/common';
import { UserStatService } from './user-stat.service';
import { UserStatController } from './user-stat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserStat, UserStatSchema } from 'src/schemas/user-stat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserStat.name,
        schema: UserStatSchema,
      },
    ]),
  ],
  controllers: [UserStatController],
  providers: [UserStatService]
})
export class UserStatModule {}
