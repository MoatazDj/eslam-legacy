import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;
  radios;

  /**
   * @constructor - will get the radio data from the api
   * @param httpClient - Httpclient service
   * @returns {this.radio}
   */

  constructor(private httpClient:HttpClient){
    this.httpClient.get("http://api.mp3quran.net/radios/radio_english.json").subscribe(data => { 
      this.radios = data["radios"].slice(0, 5);
      console.log(this.radios)
    })
  }
  
  ngOnInit(): void {
  }

}
