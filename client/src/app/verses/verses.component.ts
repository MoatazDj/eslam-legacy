import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
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
  translationText;
  constructor( private authService: AuthService, private httpClient:HttpClient) { }

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
  handleClick(surah_number, verse_number){ 
    
    this.httpClient.get(`http://api.mp3quran.net/api/aya?surah=${surah_number}&aya=${verse_number}&language=en`).subscribe(data => {
    console.log(data);  
    this.translationText = data["ayah_text_lang"];
    })
  }

 }

