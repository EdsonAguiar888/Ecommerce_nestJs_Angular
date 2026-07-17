import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id!: number; // Adicionado o '!' aqui também por garantia

  @Column({ length: 100 })
  nome!: string; // Adicionado '!'

  @Column('text', { nullable: true })
  descricao!: string; // Adicionado '!'

  @Column('decimal', { precision: 10, scale: 2 }) 
  preco!: number; // Adicionado '!'

  @Column({ name: 'imagem_url', length: 255, nullable: true })
  imagemUrl!: string; // Adicionado '!' para resolver o erro ts(2564)
}