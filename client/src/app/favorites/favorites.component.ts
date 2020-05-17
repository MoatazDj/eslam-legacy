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

  deleteFavorite(){

  }
}
