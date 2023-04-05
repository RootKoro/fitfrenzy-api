import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserStatModule } from './userStats/user-stat.module';
import { SportStatModule } from './sportstats/sport-stat.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserStatModule,
    SportStatModule,
    SwaggerModule
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService]
})
export class AppModule {}
