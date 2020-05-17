import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.css']
})

export class VersesComponent implements OnInit {
  @Input() verses;
  msbapTitle = 'Audio Title';
  msbapAudioUrl = "https://verse.mp3quran.net/arabic/ibrahim_alakhdar/32/{{verse.surah_number}}{{verse.verse_number}}.mp3";   
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;
  constructor() { }

  ngOnInit(): void {
  }

  player(id){
    let audio = <HTMLVideoElement> document.getElementById(id);
    audio.load();
    audio.play();
 }
}
