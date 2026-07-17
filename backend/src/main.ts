import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 1. Importar os módulos do Swagger
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);


  // Habilita o CORS para o Angular
  // 1. IMPORTANTE: Habilita o CORS para que o Angular consiga conversar com esta API
  app.enableCors();


  // 2. Criar a configuração básica da documentação
  const config = new DocumentBuilder()
    .setTitle('E-commerce Simples API')
    .setDescription('Documentação das rotas do nosso e-commerce de teste')
    .setVersion('1.0')
    .addTag('produtos') // Tag para organizar as rotas no painel
    .addTag('compras')
    .build();

  // 3. Gerar o documento final do Swagger baseado na configuração anterior
  const document = SwaggerModule.createDocument(app, config);

  // 4. Configurar a rota onde o Swagger estará acessível (vamos usar '/api')
  SwaggerModule.setup('api', app, document);



  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
