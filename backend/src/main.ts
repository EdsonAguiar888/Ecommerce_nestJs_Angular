import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);



  // 1. IMPORTANTE: Habilita o CORS para que o Angular consiga conversar com esta API
  app.enableCors();

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
