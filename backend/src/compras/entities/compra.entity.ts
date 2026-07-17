import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ name: 'data_compra' }) // Preenche automaticamente a data atual ao salvar
  dataCompra!: Date;

  @Column('decimal', { name: 'valor_total', precision: 10, scale: 2 })
  valorTotal!: number;

  // Como no MySQL usamos JSON, mapeamos aqui como 'any' ou um tipo personalizado.
  // Isso guardará a lista de produtos comprados naquela transação de forma simples.
  @Column('json')
  itens: any;
}