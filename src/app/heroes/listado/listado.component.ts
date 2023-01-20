import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Capitán América','Spiderman','Thor','Hulk','Ironman'];
  heroeEliminado: string = ''

  borrarHeroe() {
    this.heroeEliminado = this.heroes.pop() || '';
  }
}
