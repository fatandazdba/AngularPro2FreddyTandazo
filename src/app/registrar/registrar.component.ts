import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ConeccionService} from '../shared/services/coneccion.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {user} from '../shared/model/user.model';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  count: number ;
  registerForm: FormGroup;
  submitted = false;
  existUser: string;
  user: user;
  constructor(private conex: ConeccionService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      birthdate: ['']
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  verificarUser(usuario: string) {
    this.conex.getUserServer(usuario).subscribe(
      response => { sessionStorage.setItem('isUserActivo', response.toString());
                         console.log('Usuario ha sido verificado y SI existe: ' + response.toString());
                         this.existUser =  usuario + ' ya existe, favor ingrese otro nombre de usuario' ;
      },
      error => {   console.log( 'Usuario ha sido verificado y no existe ' + error.toString() );
                         this.existUser = '';
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    /*console.log(this.registerForm.value);*/

    // si el formulario es correcto hacemos la llamada al api
    if (!this.registerForm.invalid) {
      this.user = {username:  this.registerForm.get('firstName').value,
                   email :    this.registerForm.get('email').value,
                   password:  this.registerForm.get('password').value,
                   birthdate: this.getFecha1970(this.registerForm.get('birthdate').value)
                  };
      this.conex.registerUserServer(this.user).subscribe(
        (response) => { console.log('Los datos SI fueron ingresados de forma correcta'),
                             alert('SUCCESS!! los datos fueron ingresados de forma correcta, ya puede realizar LOGIN :-)\n\n'),
                             $('#logout').hide(),
                             this.router.navigate(['/login']);
                           },
        (error) =>    { console.log('Los datos NO fueron ingresados de forma correcta' + error.toString()),
                              alert('Alerta!! los datos no fueron ingresados :-( \n\n'),
                              $('#logout').hide();
                            });
      return ;
    } else {
        alert('Alerta!!  Los datos no fueron ingresados :-( \n\n' /*+ JSON.stringify(this.registerForm.value)*/);
        $('#logout').hide();
    }

  }

   getFecha1970(fecha: string): number {
    return  (new  Date (fecha).getTime());
   }
}
