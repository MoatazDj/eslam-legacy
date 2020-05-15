import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private httpClient:HttpClient){
    this.httpClient.get("http://api.mp3quran.net/radios/radio_english.json").subscribe(data => { 
      console.log(data);
    })
  }
  
}
