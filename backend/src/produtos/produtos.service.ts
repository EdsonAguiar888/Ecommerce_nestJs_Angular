// import { Injectable } from '@nestjs/common';
// import { CreateProdutoDto } from './dto/create-produto.dto';
// import { UpdateProdutoDto } from './dto/update-produto.dto';

// @Injectable()
// export class ProdutosService {
//   create(createProdutoDto: CreateProdutoDto) {
//     return 'This action adds a new produto';
//   }

//   findAll() {
//     return `This action returns all produtos`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} produto`;
//   }

//   update(id: number, updateProdutoDto: UpdateProdutoDto) {
//     return `This action updates a #${id} produto`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} produto`;
//   }
// }




import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable() // O decorador diz ao Nest que esta classe pode ser injetada em outras (como no Controlador)
export class ProdutosService {
  constructor(
    // Injeta o repositório do TypeORM que gerencia a tabela de produtos
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  // Busca todos os produtos cadastrados
  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  // Busca apenas um produto pelo seu ID
  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
    }
    return produto;
  }
}