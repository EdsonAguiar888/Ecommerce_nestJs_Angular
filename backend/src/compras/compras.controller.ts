import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComprasService } from './compras.service';

import { CreateCompraDto } from './dto/create-compra.dto'; // 1. Importe o DTO

@Controller('compras') // Define a rota base como http://localhost:3000/compras
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post()
  // 2. Mude o tipo do @Body para usar o seu DTO
  create(@Body() createCompraDto: CreateCompraDto) {
    return this.comprasService.create(createCompraDto);
  }

  @Get() // Escuta requisições GET para listar o histórico de compras
  findAll() {
    return this.comprasService.findAll();
  }
}