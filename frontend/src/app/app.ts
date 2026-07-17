import { Component } from '@angular/core';
import { VitrineProdutosComponent } from './components/vitrine-produtos/vitrine-produtos'; // Sem ".component" no caminho
import { CarrinhoComprasComponent } from './components/carrinho-compras/carrinho-compras'; // Sem ".component" no caminho

@Component({
  selector: 'app-root',
  standalone: true,
  // Declaramos nossos dois componentes aqui para usá-los no HTML principal
  imports: [VitrineProdutosComponent, CarrinhoComprasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ecommerce-frontend';
}