import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `

    <H1>{{ titulo }}</H1>

    <h2>
      La base es: <strong>{{ base }}</strong>
    </h2>

    <button (click)="acumular(base)">{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">{{ base }}</button>

  `
})
export class ContadorComponent {

    titulo: string = 'Curso de angular - Componentes :: Contador';
    numero: number = 10;
  
    base: number = 5;
  
    acumular( valor: number ) {
      this.numero += valor
    }

}
