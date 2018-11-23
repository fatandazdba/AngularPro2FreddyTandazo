import { Component, OnInit } from '@angular/core';
import {ConeccionService} from '../shared/services/coneccion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  constructor( private conex: ConeccionService) { }

  ngOnInit() {
  this.usuario = 'freddy';
  }

  logearUsuario(){
    this.conex.selectProducts();
      console.log( "los mensajes del usuario");
  }
}
