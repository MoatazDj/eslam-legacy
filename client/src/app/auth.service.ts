import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id = localStorage.getItem('id');
  token = localStorage.getItem('token');
  gender = localStorage.getItem('gender')
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
    localStorage.setItem('id', id);
  }

  setGender(gender){
    this.gender = gender;
    localStorage.setItem('gender', gender);
  }

  getGender(){
    return this.gender;
  }

  reset(){
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('gender');
    this.id = undefined;
    this.token = undefined;
    this.gender = undefined;
  }

}
