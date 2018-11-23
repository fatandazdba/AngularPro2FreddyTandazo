import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule} from '@angular/forms';
import { ConeccionService} from './shared/services/coneccion.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ConeccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
