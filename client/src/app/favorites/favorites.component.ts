import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {

  user_id = this.authService.getId()

  constructor(private authService: AuthService) { }
  ngOnInit(){
    this.getFavorites(this.user_id)
  }
  getFavorites(user_id)  { 
    fetch('http://localhost:8200/favourites',{
      method : 'GET',
      headers : {
        'content-type':'application/json'
      },
      body : JSON.stringify(user_id) 
    })
    .then(res => {return res.json()})
    .then(data => {console.log(data)})
    .catch(err =>{console.log(err)})
  }
}
