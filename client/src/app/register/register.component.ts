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
  user = {
    first_name : '',
    last_name : '',
    email : '',
    password : '',
    gender : ''
  }
  onSubmit(data:any) :void { 
    let user = data.user; 
    console.log(user);
    console.log( this.httpClient.post<any>('http://localhost:8200/auth/signup', user).subscribe(res => console.log(res)))
  }
}
