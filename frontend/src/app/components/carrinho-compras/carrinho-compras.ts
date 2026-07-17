import { Component, ChangeDetectorRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-carrinho-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.css'
})
export class CarrinhoComprasComponent implements OnInit {
  
  constructor(
    private carrinhoService: CarrinhoService,
    private cdr: ChangeDetectorRef, // <-- Adicionamos o controlador de tela aqui também
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Cria um mecanismo que fica vigiando o carrinho. 
      // Sempre que um produto entrar, ele força a tela a atualizar.
      setInterval(() => {
        this.cdr.detectChanges();
      }, 500); // Checa a cada meio segundo se há novos itens
    }
  }

  get itens() {
    return this.carrinhoService.getItens();
  }

  get total() {
    return this.carrinhoService.getValorTotal();
  }

  finalizar() {
    if (this.itens.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    this.carrinhoService.finalizarCompra().subscribe({
      next: (resposta: any) => {
        alert(`🛒 Compra nº ${resposta.id} finalizada com sucesso! Gravado no MySQL.`);
        this.carrinhoService.limparCarrinho();
        this.cdr.detectChanges(); // Atualiza a tela após limpar
      },
      error: (erro) => {
        alert("Erro ao finalizar a compra no servidor backend.");
        console.error(erro);
      }
    });
  }
}