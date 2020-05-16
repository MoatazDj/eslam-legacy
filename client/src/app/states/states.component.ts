import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  state;
  verses;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getState(name){
     this.state = name 
     console.log(this.state)
    fetch(`http://localhost:8200/verses/${this.state}`, {
      method : 'GET',
      headers : {
        'content-type':'application/json'
      },
    })
    .then(res => {return res.json()})
    .then(data => {this.verses = data})
    .catch(err =>{console.log(err)})
  }
}
