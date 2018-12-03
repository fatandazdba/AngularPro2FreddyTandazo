import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from '../registrar/must-match.validator';
import * as $ from 'jquery';
import { ConeccionService } from '../shared/services/coneccion.service';
import { reservar } from '../shared/model/reservar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  reservas: any;
  reservasAll: any;
  fecha1970: number;
  reservarPadel: reservar;

  constructor( private conex: ConeccionService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fecha: ['', Validators.required],
      hora:  ['', Validators.required],
      pista: ['', Validators.required]
    });
    this.showReservasServer();
    this.inicializar_loghinLogOut();
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  showReservasServer() {
    this.conex.getReservationsServer().subscribe(
      (response) => {  console.log('Las reservas fueron consultadas de forma correcta: '),
                            console.log(response),
                            this.reservas = response;
      },
      (error) =>    { console.log('Las reservas no fueron consultadas de forma correcta: ' + error.toString());
                             alert('Error 401!! \n' + 'Su sesión ha expirado, favor realice login \n');
                            // this.router.navigate(['/login']);
      });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    this.reservarPadel = {  courtid:       this.registerForm.get('pista').value,
                            rsvdatetime  : this.getTimeReservas(this.registerForm.get('fecha').value, this.registerForm.get('hora').value)
                          };

    // si el formulario es correcto hacemos la llamada al api
    if (!this.registerForm.invalid) { console.log('Estamos en el submit');
      this.conex.makeReservationServer(this.reservarPadel).subscribe(
        (response) => {  console.log('Los datos SI fueron ingresados de forma correcta'),
                              alert('SUCCESS!! La reserva fue realizada de forma correcta :-)\n\n'),
                              $('#logout').show();
                              this.registerForm.reset();
                              this.showReservasServer();
                              this.getAllReservas(this.registerForm.get('fecha').value);
                              this.router.navigate(['/reservar']);
        },
        (error) =>    { console.log('La reserva no fue ingresada de forma correcta' + error.toString());
                              console.log('Error Status' + error.status);
                              if (error.status === 400) {
                                alert('Error 400!! \t\n' + 'no valid court id or reservation date/time :-( \n\n');
                              }
                              if (error.status === 401) { // No existe un token valido
                                alert('Error 401!! \t\n' + 'Favor realice login para realizar una reserva :-( \n\n');
                                this.router.navigate(['/login']);
                              }
                              if (error.status === 409) {
                                alert('Error 409!! \t\n' + 'El numero maximo de reservas a sido excedido \n' + ' :-( \n\n');
                              }
                              if (error.status === 500) {
                                alert('Error 500!! \t\n' + 'Error interno del servidor :-( \n\n');
                              }
                              $('#logout').hide();
        });
      return ;
    }
  }

  getAllReservas(fecha: string) {
    this.fecha1970 = new  Date (fecha).getTime();
    this.conex.getAllReservationsServer((this.fecha1970).toString()).subscribe(
      (response) => {  console.log('Todas las reservas fueron consultadas de forma correcta: '),
                            console.log('Response all reserves: ' + response),
                            this.reservasAll = response;
      },
      (error) =>    { console.log('Todas lasssssssssssssssssssss reservas no fueron consultadas de forma correcta: ' + error.toString());
      });
  }

  getTimeReservas(fecha: string, hora: string) {
    return  (new  Date (fecha + ' ' + hora + ':00:00').getTime());
  }

  eliminarReserva(idReserva: number) {
    this.conex.deleteReservationByIdServer(idReserva).subscribe(
      (response) => {   console.log('La reserva ha sido eliminada de forma correcta: '),
                             console.log('Response all reserves: ' + response),
                             alert('SUCCESS!! La reserva fue eliminada de forma correcta :-)\n\n');
                             this.showReservasServer();
      },
      (error) =>    { alert('SUCCESS!! La reserva no fue eliminada de forma correcta :-)\n\n');
      });
  }

  inicializar_loghinLogOut() {
    if ((sessionStorage.getItem('isLoginAcepted') === 'true' )) {
      $('#logout').show();
      $('#login').hide();
      $('#registrar').hide();
    } else {
      $('#login').hide();
      $('#registrar').hide();
      this.router.navigate(['/login'], );
      alert('Favor hacer login para ver las reservas, gracias. :-)\n\n');
    }
  }
}
