import { Component, OnInit } from '@angular/core';
import { IslamicService } from '@syncfusion/ej2-angular-calendars';
import { addClass } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-calendar',
  providers:[IslamicService],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  
}


