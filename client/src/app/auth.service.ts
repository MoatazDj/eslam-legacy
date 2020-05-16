import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id = localStorage.getItem('id');
  token = localStorage.getItem('token');
  constructor() { }

  getToken(){
    return this.token
  }

  setToken(token){
    this.token = token;
    localStorage.setItem('token', token);
  }

  getId(){
    return this.id
  }

  setId(id){
    this.id = id;
    localStorage.setItem('token', id);
  }

}
