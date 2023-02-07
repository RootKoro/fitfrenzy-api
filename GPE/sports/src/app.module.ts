import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportsModule } from './sports/sports.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    SportsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
