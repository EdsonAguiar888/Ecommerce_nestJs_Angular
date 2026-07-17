import { Controller, Get, Param } from '@nestjs/common';
import { ProdutosService } from './produtos.service';

@Controller('produtos') // Define a rota base como http://localhost:3000/produtos
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get() // Escuta requisições GET em http://localhost:3000/produtos
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id') // Escuta requisições GET em http://localhost:3000/produtos/1
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id); // O '+' converte a string do ID em número
  }
}