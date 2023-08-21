import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Statistiques API Documentation')
    .setDescription('API Documentation for Microservice statistiques')
    .setVersion('1.0')
    .addTag('STATS API')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
};
