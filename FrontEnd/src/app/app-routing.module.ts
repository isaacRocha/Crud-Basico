import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './compomentes/adicionar/adicionar.component';
import { AtualizarComponent } from './compomentes/atualizar/atualizar.component';
import { HomeComponent } from './compomentes/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'adicionar', component: AdicionarComponent},
  {path:'atualizar/:id', component: AtualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
