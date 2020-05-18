import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  favorites;
  user_id=this.authService.getId()
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * @function {getFavorites}-will the favorites that the user selected and send it to the favorites list component
   * @param {void}
   * @returns {void}
   */

  getFavorites()  { 
    fetch(`http://localhost:8200/favourites/${this.user_id}` ,{
      method : 'GET',
      headers : {
        'content-type':'application/json',
      },
    })
    .then(res => {return res.json()})
    .then(data => {this.favorites = data})
    .catch(err =>{console.log(err)})
  }
}
