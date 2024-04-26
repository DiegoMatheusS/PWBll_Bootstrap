import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    nomeProduto: string = "Honda City";
    anuncio: string = `${this.nomeProduto} está em promção`;
    idProduto: number = 1;
    precoProduto: number= 80000.00;
    promocao: boolean = true;
    foto: string = 'assets/city.png';
    dataValidade = "2021-12-31";
}
