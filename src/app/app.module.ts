import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrzyciskComponent } from './components/przycisk/przycisk.component';
import { SocjaleComponent } from './components/socjale/socjale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrzyciskComponent,
    SocjaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
