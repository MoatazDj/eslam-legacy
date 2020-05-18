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
    
  }

  /**
   * @function {getPrayerTime}-will give the user the prayer time of the date that he selected
   * @param {void}
   * @returns {void}
   */
  
  getPrayerTime(){
  
    console.log(this.model);
    let year = this.model.year
    let day = this.model.day
    let month = this.model.month;
    console.log(month);
    fetch("http://api.aladhan.com/v1/calendarByCity?city=Tunis&country=Tunisia&method=2&month={{month}}&year={{year}}", {
        method : 'GET'
      })
      .then(res => {return res.json()})
      .then(data => {this.prayers = data.data[day-1]
        console.log("data:", data);
                    console.log(this.prayers)})
      .catch(err =>{console.log(err)})
    }

}
