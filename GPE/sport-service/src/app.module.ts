import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvicesModule } from './advices/advices.module';
import { SportsModule } from './sports/sports.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AdvicesModule,
    SportsModule,
    SwaggerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
