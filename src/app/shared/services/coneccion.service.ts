import { Injectable } from '@angular/core';
import {observable} from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConeccionService {
  private baseurl = 'http://fenw.etsisi.upm.es.:1723';
  token;

  constructor(private http: HttpClient) { }

  selectProducts() {
    console.log(this.baseurl);
    return this.http.get(this.baseurl + '/users/login/?username=user1&password=user1', ( observe: 'response'))
      .subscribe(response => this.token = response.headers.get('Authorization'));
  }


}
