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
  msbapTitle = 'Audio Title';  
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;
  constructor( private authService: AuthService) { }
  ngOnInit(){
  }

//   deleteFavorite(){
//     let verse ={
//       verse_id : id,
//       user_id : this.authService.getId()
//    }  
//    fetch(`http://localhost:8200/favourites/${this.user_id}` ,{
//     method : 'GET',
//     headers : {
//       'content-type':'application/json',
//     },
//   })
//   .then(res => {return res.json()})
//   .then(data => {this.favorites = data})
//   .catch(err =>{console.log(err)})
// }
  deleteFavorite(){
    
  }
}

