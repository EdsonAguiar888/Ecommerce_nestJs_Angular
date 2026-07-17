import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-vitrine-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine-produtos.html', 
  styleUrl: './vitrine-produtos.css'
})
export class VitrineProdutosComponent implements OnInit {
  produtos: any[] = [];

  constructor(
    private http: HttpClient,
    private carrinhoService: CarrinhoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef // <-- Adicionamos esse "controlador de tela"
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.carregarProdutos();
    }
  }

  carregarProdutos() {
    this.http.get<any[]>('http://localhost:3000/produtos').subscribe({
      next: (dados) => {
        this.produtos = dados;
        console.log('Produtos carregados com sucesso:', this.produtos);
        
        // FORÇA O ANGULAR A DESENHAR OS PRODUTOS NA TELA IMEDIATAMENTE
        this.cdr.detectChanges(); 
      },
      error: (erro) => {
        console.error('Erro ao conectar com o Backend NestJS:', erro);
      }
    });
  }

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionar(produto);
    alert(`${produto.nome} adicionado ao carrinho!`);
  }
}