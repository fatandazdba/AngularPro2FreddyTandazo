import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() {
    this.InicializarLiginLout();
  }

  ngOnInit() {
    this.InicializarLiginLout();
  }

InicializarLiginLout() {
  if ((sessionStorage.getItem('isLoginAcepted') === 'true' )) {
    $('#logout').show();
  } else {
    $('#login').hide();
    $('#registrar').hide();
  }
}

}
