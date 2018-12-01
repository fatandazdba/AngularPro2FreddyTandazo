import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ConeccionService} from '../shared/services/coneccion.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  isLoginM: boolean = (sessionStorage.getItem('isLoginAcepted') === 'true') ? true : false;

  constructor( private conex: ConeccionService, private router: Router) {
  }

  ngOnInit() {
    /*this.isLoginM = false;*/
  }

  logearUsuario(usuario: string, contrasenia: string) {
    this.conex.selectProducts(usuario, contrasenia).subscribe(
      response => { this.token = response.toString();
                         this.conex.isLogin = true;
                         this.isLoginM = false;
                         sessionStorage.setItem('isLoginAcepted', 'true');
                         sessionStorage.setItem('token', response.toString());
                         console.log( 'GOOD REQUEST IS LOGIN: ' + this.conex.isLogin);
                         console.log(response.toString());
                         $('#login').hide();
                         $('#registrar').hide();
                         $('#logout').show();
                         this.router.navigate(['/inicio']);
      },
      error => {   this.conex.isLogin = false ;
                         sessionStorage.setItem('isLoginAcepted', 'false');
                         this.isLoginM = true;
                         console.log( 'BAD REQUEST is login ' + this.conex.isLogin );
      });
  }

}
