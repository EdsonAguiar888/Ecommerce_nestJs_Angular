// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}




import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';
import { ComprasModule } from './compras/compras.module';

@Module({
  imports: [
    // O TypeOrmModule.forRoot configura a conexão global com o banco de dados
    TypeOrmModule.forRoot({
      type: 'mysql',             // Tipo do banco de dados
      host: 'localhost',         // Onde o banco está rodando (sua máquina)
      port: 3306,                // Porta padrão do MySQL
      username: 'root',          // Seu usuário do MySQL (altere se for diferente)
      password: '',              // Sua senha do MySQL (coloque a sua aqui!)
      database: 'ecommerce_simples', // Nome do banco de dados que criamos
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Onde o TypeORM vai procurar nossas tabelas
      synchronize: false,        // Mantenha 'false' pois já criamos as tabelas manualmente via SQL
    }),
    ProdutosModule,
    ComprasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}