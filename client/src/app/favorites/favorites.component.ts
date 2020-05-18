import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Input } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  @Input() favorites;
  user_id=this.authService.getId()
  msbapTitle = 'Audio Title';  
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;
  constructor( private authService: AuthService) { }
  ngOnInit(){
  }

  /**
   * @function {deleteFavorite}-will delete the verse from the favorites list 
   * @param id - the verse id
   * @returns - deletes the verse from the favorites list that the user selected
   */

  deleteFavorite(id){
   console.log(id)
   fetch(`http://localhost:8200/favourites/${id}` ,{
     method : 'DELETE',
   headers : {
     'content-type':'application/json',
   },
  })
    .then(res => {return res.json()})
    .then((data) =>{
      fetch(`http://localhost:8200/favourites/${this.user_id}` ,{
      method : 'GET',
      headers : {
        'content-type':'application/json',
      },
    })
    .then(res => {return res.json()})
    .then(data => {this.favorites = data})
    .catch(err =>{console.log(err)})
    })
  }
}

