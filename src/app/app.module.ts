import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrzyciskComponent } from './components/przycisk/przycisk.component';
import { SocjaleComponent } from './components/socjale/socjale.component';
import { Sekcja1Component } from './components/sekcja1/sekcja1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrzyciskComponent,
    SocjaleComponent,
    Sekcja1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
