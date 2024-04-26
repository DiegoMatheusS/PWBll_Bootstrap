import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

 /* listarStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Diego',
    idade: 18,
    altura: 1.71,
    graduado: false
  };
*/
  listaProdutos: any[] = [
    {nome: 'Honda City', precoProduto: 80000.00, validade: '2021-12-31', id: 1, promocao: true},
    {nome: 'Honda Civic', precoProduto: 120000.00, validade: '2021-12-31', id: 2},
    {id: 3, nome: 'HB20', precoProduto: 80000.00, validade: '2021-12-31'}

  ];


  /*constructor() { 
    for (let item of this.listarStrings){
    console.log(item);
  }

    for(const item of this.listaNumeros){
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);

}*/
ngOnInit(): void {

  }
}