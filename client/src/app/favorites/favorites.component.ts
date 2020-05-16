import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {

  user_id = {user_id : 1}

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getFavorites(this.user_id)
  }
  getFavorites(user_id)  { 
    console.log( this.http.get<any>('http://localhost:8200/favourites', user_id)
    .subscribe(res => console.log(res)))
  }
}
