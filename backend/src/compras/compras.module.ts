// import { Module } from '@nestjs/common';
// import { ComprasService } from './compras.service';
// import { ComprasController } from './compras.controller';

// @Module({
//   controllers: [ComprasController],
//   providers: [ComprasService],
// })
// export class ComprasModule {}



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { Compra } from './entities/compra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compra])],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}