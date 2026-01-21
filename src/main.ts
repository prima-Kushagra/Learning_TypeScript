import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, 
// ✔ Removes any extra properties from the request body
// ❌ Only keeps properties that are defined in the DTO
// Example: if DTO has only "name" and "age",
// and request sends "email" → email will be removed

forbidNonWhitelisted: true,
// ❌ Throws an error instead of silently removing extra properties
// If request contains fields NOT defined in DTO,
// NestJS will return 400 Bad Request
// Example: sending "role" when DTO doesn't allow it → error

transform: true,
// 🔁 Automatically converts request payloads to DTO types
// Converts string params to numbers, booleans, etc.
// Example: "age": "25" → age: 25 (number)
// Also allows class-validator decorators to work correctly

  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
