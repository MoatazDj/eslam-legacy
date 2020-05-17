import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.css']
})

export class VersesComponent implements OnInit {
  @Input() verses;
  msbapTitle = 'Audio Title';
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

 addFavorite(id){
   let verse ={
      verse_id : id,
      user_id : this.authService.getId()
   }  
    fetch('http://localhost:8200/verses', {
      method : 'POST',
      headers : {
        'content-type':'application/json',
      },
      body : JSON.stringify(verse) 
    })
    .then(res => {return res.json()})
    .then(data => {console.log(data)})
    .catch(err =>{console.log(err)})
  }
 }

