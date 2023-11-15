import { Module } from '@nestjs/common';
import { AdvicesService } from './advices.service';
import { AdvicesController } from './advices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Advice, AdviceSchema } from 'src/schemas/advice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Advice.name,
        schema: AdviceSchema,
      },
    ]),
  ],
  controllers: [AdvicesController],
  providers: [AdvicesService]
})
export class AdvicesModule {}
