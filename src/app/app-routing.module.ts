import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {LogoutComponent} from './logout/logout.component';
import {RegistrarComponent} from './registrar/registrar.component';
import {ReservarComponent} from './reservar/reservar.component';
import {ServiciosComponent} from './servicios/servicios.component';
import {CanchasinteticaComponent} from './canchasintetica/canchasintetica.component';

const routes: Routes = [
  { path: 'login', component:  LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'reservar', component: ReservarComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'canchasintetica', component: CanchasinteticaComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
