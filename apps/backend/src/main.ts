import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/modules/main.module';


async function Start() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3001;

  //Swagger setup
  const config = new DocumentBuilder()
  .setTitle('Pass server API')
  .setDescription('The pass server API description')
  .setVersion('0.0.1')
  .build();
  const document = SwaggerModule.createDocument(app, config);
 
  SwaggerModule.setup('docs', app, document);
  //app.useGlobalPipes(new ValidationPipe())
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

}

Start();
