import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  gender = this.authService.getGender()
  state;
  verses;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * @function {getState}-will get the user data related to the states and get 
   * @param name - the user data 
   * @returns {void}
   */

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
