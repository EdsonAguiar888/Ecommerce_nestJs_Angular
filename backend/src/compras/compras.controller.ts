import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComprasService } from './compras.service';

@Controller('compras') // Define a rota base como http://localhost:3000/compras
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post() // Escuta requisições POST para finalizar uma compra
  create(@Body() dadosCompra: { valorTotal: number; itens: any[] }) {
    return this.comprasService.create(dadosCompra);
  }

  @Get() // Escuta requisições GET para listar o histórico de compras
  findAll() {
    return this.comprasService.findAll();
  }
}