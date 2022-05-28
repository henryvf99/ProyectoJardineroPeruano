import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from './formulario/formulario.component';
import {ValoracionComponent} from './valoracion/valoracion.component';
import {RegistroComponent} from './registro/registro.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'valoracion',
    component: ValoracionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
