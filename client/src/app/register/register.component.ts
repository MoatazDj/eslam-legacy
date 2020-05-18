import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  /**
   * @function {onSubmit}-will get the user information, send it to the server and save it into the data base 
   * @param {data}- the user information
   * @returns {void}
   */

  user = {
    first_name : '',
    last_name : '',
    email : '',
    password : '',
    gender : ''
  }
  onSubmit(data:any) :void { 
    let user = data.user; 
    fetch('http://localhost:8200/auth/signup', {
      method : 'POST',
      headers : {
        'content-type':'application/json',
      },
      body : JSON.stringify(user) 
    })
    .then(res => {return res.json()})
    .then(data => {
      window.location.href = `http://localhost:4200/login`
    })
    .catch(err =>{console.log(err)})
  
  }
}
