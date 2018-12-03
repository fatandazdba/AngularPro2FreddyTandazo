import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConeccionService } from './shared/services/coneccion.service';
import { HttpClientModule } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { LogoutComponent } from './logout/logout.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CanchasinteticaComponent } from './canchasintetica/canchasintetica.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    LogoutComponent,
    RegistrarComponent,
    ReservarComponent,
    ServiciosComponent,
    CanchasinteticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ConeccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
