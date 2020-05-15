import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  user = {
    email : '',
    password : ''
  }
  onSubmit(data:any): void { 
    let user = data.value.user; 
    console.log(data);
    console.log( this.httpClient.post<any>('http://localhost:8200/auth/signin', user).subscribe(res => console.log(res)))
  }
}
