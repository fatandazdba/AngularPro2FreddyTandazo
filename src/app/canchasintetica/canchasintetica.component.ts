import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-canchasintetica',
  templateUrl: './canchasintetica.component.html',
  styleUrls: ['./canchasintetica.component.css']
})
export class CanchasinteticaComponent implements OnInit {

  constructor() {
    this.InicializarLiginLout();
  }

  ngOnInit() {
    this.InicializarLiginLout();
  }

  InicializarLiginLout() {
    console.log('(sessionStorage.getItem(\'isLoginAcepted\'): ' + (sessionStorage.getItem('isLoginAcepted')));
    if ((sessionStorage.getItem('isLoginAcepted') === 'true' )) {
      $('#logout').show();
      $('#reservar').show();
      $('#login').hide();
      $('#registrar').hide();
      console.log('if');
    } else {
      $('#login').show();
      $('#registrar').show();
      $('#logout').hide();
      $('#reservar').hide();
    }
  }

}
