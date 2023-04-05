import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = (app) => {
  const options = new DocumentBuilder()
    .setTitle('Users API Documentation')
    .setDescription('API Documentation for Microservice users')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
};