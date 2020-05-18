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

  /**
   * @function {onSubmit}-will submit the user info and check if the user exist or no, if so it will redirect him to the home page
   * @param data - the user information 
   * @returns {void}
   */

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
    .then(data => {
      this.authService.setToken(data.token)
      this.authService.setId(data.user_id)
      this.authService.setGender(data.gender)
      window.location.href = `http://localhost:4200/profile`
    })
    .catch(err =>{console.log(err)})
  }
}
