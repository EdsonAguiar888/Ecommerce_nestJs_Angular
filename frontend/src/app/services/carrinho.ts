// import { Service } from '@angular/core';

// @Service()
// export class Carrinho {}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Torna o serviço disponível em toda a aplicação
})
export class CarrinhoService {
  // Nossa lista na memória do navegador que armazena os produtos adicionados
  private itensCarrinho: any[] = [];
  private apiUrl = 'http://localhost:3000/compras'; // URL do nosso backend NestJS

  constructor(private http: HttpClient) {}

  // Retorna os itens atuais do carrinho
  getItens() {
    return this.itensCarrinho;
  }

  // Adiciona um produto ao carrinho ou aumenta a quantidade se ele já existir
  adicionar(produto: any) {
    const itemExistente = this.itensCarrinho.find(item => item.produtoId === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      this.itensCarrinho.push({
        produtoId: produto.id,
        nome: produto.nome,
        precoUnitario: Number(produto.preco),
        quantidade: 1
      });
    }
  }

  // Calcula a soma total de todos os produtos multiplicados pelas suas quantidades
  getValorTotal(): number {
    return this.itensCarrinho.reduce((total, item) => total + (item.precoUnitario * item.quantidade), 0);
  }

  // Envia os dados para a API do NestJS finalizar a compra no MySQL e limpa o carrinho
  finalizarCompra(): Observable<any> {
    const payload = {
      valorTotal: this.getValorTotal(),
      itens: this.itensCarrinho
    };

    // Retorna um Observable (um fluxo assíncrono que fará o POST ao backend)
    return this.http.post(this.apiUrl, payload);
  }

  limparCarrinho() {
    this.itensCarrinho = [];
  }
}