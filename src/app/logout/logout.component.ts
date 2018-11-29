import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    sessionStorage.setItem('isLoginAcepted', 'false');
    sessionStorage.setItem('token', '');
    sessionStorage.clear();

    $('#login').show();
    $('#registrar').show();
    $('#logout').hide();

    /*ir a la pantalla de login*/
    this.router.navigate(['/login']);
  }

}
