import { Injectable } from '@angular/core';
import {observable} from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ConeccionService {
  private baseurl = 'http://fenw.etsisi.upm.es.:1723';
  token: string;
  isLogin: boolean = (sessionStorage.getItem('isLoginAcepted') === 'true') ? true : false;

  constructor(private http: HttpClient) {
    this.token = '';
  }

  selectProducts(usuario: string, contrasenia: string) {
      return this.http.get (this.baseurl + '/users/login/?username=' + usuario + '&password=' + contrasenia);
  }

  getUserServer( usuario: string) {
    return this.http.get (this.baseurl + '/users/' + usuario);
  }

  registerUserServer(user) {
    const headers = new HttpHeaders()
      .set( 'Content-Type' , 'application/json');
      /*.set('Authorithation', sessionStorage.getItem('token')) ;*/
      return this.http.post(this.baseurl + '/users', user, {headers});
  }
}
