import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer-time',
  templateUrl: './prayer-time.component.html',
  styleUrls: ['./prayer-time.component.css']
})
export class PrayerTimeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.getPrayerTime()
  }

  getPrayerTime(){
    let date = new Date();
    let month = date.getMonth()+1;
    fetch("http://api.aladhan.com/v1/calendarByCity?city=Tunis&country=Tunisia&method=2&month={{month}}&year=2020", {
        method : 'GET'
      })
      .then(res => {return res.json()})
      .then(data => {console.log(data)})
      .catch(err =>{console.log(err)})
    }

}
