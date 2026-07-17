import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
  ) {}

  // Cria um novo registro de compra no banco de dados
  async create(dadosCompra: { valorTotal: number; itens: any[] }): Promise<Compra> {
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