import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ConeccionService} from '../shared/services/coneccion.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  constructor(private conex: ConeccionService, private router: Router) { }

  ngOnInit() {
  }
  verificarUser(usuario: string){
    this.conex.getUserServer(usuario).subscribe(
      response => { sessionStorage.setItem('isUserActivo', response.toString());
      },
      error => {   console.log( 'BAD REQUEST TO VERIFIQUE USER ' + error.toString() );
      });
  }
}
