import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-prayer-time',
  templateUrl: './prayer-time.component.html',
  styleUrls: ['./prayer-time.component.css']
})
export class PrayerTimeComponent implements OnInit {

  prayers;
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.getPrayerTime()
  }

  getPrayerTime(){
    let date = new Date();
    console.log(date)
    let month = date.getMonth()+1;
    fetch("http://api.aladhan.com/v1/calendarByCity?city=Tunis&country=Tunisia&method=2&month={{month}}&year=2020", {
        method : 'GET'
      })
      .then(res => {return res.json()})
      .then(data => {this.prayers = data.data.splice(0, 5)
                      console.log(data)
                    })
      .catch(err =>{console.log(err)})
    }

}
