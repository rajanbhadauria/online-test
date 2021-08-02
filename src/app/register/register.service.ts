import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

   }
  
  saveUser(userData) {
    this.http.post(this.apiUrl+"/users/signup", userData).
  }
}
