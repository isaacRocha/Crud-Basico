import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compomentes/home/home.component';
import { AdicionarComponent } from './compomentes/adicionar/adicionar.component';
import { AtualizarComponent } from './compomentes/atualizar/atualizar.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarComponent,
    AtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
