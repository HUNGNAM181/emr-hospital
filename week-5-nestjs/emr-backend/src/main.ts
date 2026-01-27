import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

// Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Helmet
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // ================= VALIDATION =================
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // loại bỏ field thừa
      forbidNonWhitelisted: true, // reject field không khai báo trong DTO
      transform: true, // tự convert kiểu (string -> number)
    }),
  );

  // ================= GLOBAL FILTER =================
  app.useGlobalFilters(new HttpExceptionFilter());

  // ================= HELMET =================
  app.use(helmet());

  // ================= CORS (STRICT) =================
  app.enableCors({
    origin: ['http://localhost:3000'], // frontend
    credentials: true,
  });

  // ================= GLOBAL AUTH GUARD =================
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // ================= SWAGGER (DEV ONLY) =================
  if (process.env.NODE_ENV !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('EMR Backend API')
      .setDescription('Electronic Medical Records Backend')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api-docs', app, document);

    console.log('Swagger enabled (DEV mode)');
  }

  // ================= START SERVER =================
  const port = configService.get<number>('PORT') || 3001;
  await app.listen(port);

  console.log(`Server running on http://localhost:${port}`);
}

void bootstrap();
