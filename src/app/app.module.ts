import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// crear el módulo para el contador, como: ContadorModule
// con sus declaraciones y exportaciones


// import { ContadorComponent } from './contador/contador/contador.component';

// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.modules';
import { ContadorModule } from './contador/contador/contador.modules';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
