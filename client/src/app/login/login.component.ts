import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
  }
  user = {
    email : '',
    password : ''
  }
  onSubmit(data:any) { 
    let user = data.value.user; 
    fetch('http://localhost:8200/auth/signin', {
      method : 'POST',
      headers : {
        'content-type':'application/json',
      },
      body : JSON.stringify(user) 
    })
    .then(res => {return res.json()})
    .then(data => {this.authService.setToken(data.token)})
    .catch(err =>{console.log(err)})
  }
}
