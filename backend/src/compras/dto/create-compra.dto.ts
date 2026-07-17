import { ApiProperty } from '@nestjs/swagger';

export class CreateCompraDto {
  @ApiProperty({ example: 408.90, description: 'Valor total da compra' })
  valorTotal!: number;

  @ApiProperty({
    example: [
      { produtoId: 1, nome: 'Teclado Mecânico RGB', quantidade: 1, precoUnitario: 249.90 }
    ],
    description: 'Lista de produtos inclusos no carrinho'
  })
  itens!: any[];
}