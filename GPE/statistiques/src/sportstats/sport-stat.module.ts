import { Module } from '@nestjs/common';
import { SportStatService } from './sport-stat.service';
import { SportStatController } from './sport-stat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SportStat, SportStatSchema } from 'src/schemas/sport-stat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SportStat.name,
        schema: SportStatSchema,
      },
    ]),
  ],
  controllers: [SportStatController],
  providers: [SportStatService]
})
export class SportStatModule {}
