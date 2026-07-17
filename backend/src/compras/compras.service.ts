import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';

import { CreateCompraDto } from './dto/create-compra.dto'; // Importe o DTO aqui também

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
  ) {}

 

  // Ajuste o parâmetro para ler do DTO com segurança
  async create(dadosCompra: CreateCompraDto): Promise<Compra> {
    const novaCompra = this.compraRepository.create({
      valorTotal: dadosCompra.valorTotal,
      itens: dadosCompra.itens,
    });
    return await this.compraRepository.save(novaCompra);
  }

  // Lista todas as compras realizadas para fins de consulta
  async findAll(): Promise<Compra[]> {
    return await this.compraRepository.find();
  }
}