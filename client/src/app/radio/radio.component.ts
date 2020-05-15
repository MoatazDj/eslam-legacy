import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor(private httpClient:HttpClient){
    this.httpClient.get("http://api.mp3quran.net/radios/radio_english.json").subscribe(data => { 
      console.log(data);
    })
  }
  

  ngOnInit(): void {
  }

}
