import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { ConeccionService } from './shared/services/coneccion.service';
import { HttpClientModule } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { LogoutComponent } from './logout/logout.component';
import { RegistrarComponent } from './registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    LogoutComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ConeccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
