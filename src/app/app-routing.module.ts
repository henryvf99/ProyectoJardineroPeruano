import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from './formulario/formulario.component';
import {ValoracionListComponent} from './admin/valoracion-list/valoracion-list.component';
import {ValoracionComponent} from './valoracion/valoracion.component';
import {FormularioListComponent} from './admin/formulario-list/formulario-list.component';
import {RegistroComponent} from './registro/registro.component';
import {InicioComponent} from './inicio/inicio.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },
  {
    path: 'valoraciones',
    component: ValoracionListComponent
  },
  {
    path: 'formularios',
    component: FormularioListComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
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
  },
  {
    path: 'tips',
    component: TipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
