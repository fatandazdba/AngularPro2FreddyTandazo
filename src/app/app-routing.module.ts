import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
