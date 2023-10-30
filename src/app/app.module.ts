import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrzyciskComponent } from './components/przycisk/przycisk.component';
import { SocjaleComponent } from './components/socjale/socjale.component';
import { Sekcja1Component } from './components/sekcja1/sekcja1.component';
import { Sekcja2Component } from './components/sekcja2/sekcja2.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SekcjaMapaComponent } from './components/sekcja-mapa/sekcja-mapa.component';
import { StopkaComponent } from './components/stopka/stopka.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrzyciskComponent,
    SocjaleComponent,
    Sekcja1Component,
    Sekcja2Component,
    GaleriaComponent,
    SekcjaMapaComponent,
    StopkaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
