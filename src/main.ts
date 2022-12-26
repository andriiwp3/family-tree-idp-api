import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { APP_PORT } from './common/constants/env.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * Initializing the Config Service to access the env variables
   */
  const configService = app.get<ConfigService>(ConfigService);

  /**
   * Swagger Initialization
   */
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Family Tree IDP API')
    .setDescription('Endpoints description for the Family Tree IDP application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api', app, document);

  /**
   * Get port from env variables or use 8080 by default
   */
  const PORT = configService.get<number>(APP_PORT, 8080);

  /**
   * Start listen an application
   */
  await app.listen(PORT);
}

bootstrap();
