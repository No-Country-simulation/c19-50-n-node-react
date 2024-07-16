import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('DescubreCórdoba API')
    .setDescription(
      'La API de Descubre Córdoba proporciona una serie de endpoints para explorar y descubrir los puntos de interés, eventos, y servicios disponibles en la ciudad de Córdoba. ' +
        'Utiliza esta API para acceder a información detallada sobre lugares turísticos, actividades culturales y mucho más. ' +
        'Los endpoints están diseñados para ser intuitivos y fáciles de usar, ofreciendo respuestas en formatos JSON que facilitan la integración con aplicaciones móviles y web.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({});

  await app.listen(process.env.PORT);
  logger.log(`App running on port: ${process.env.PORT}`);
}
bootstrap();
