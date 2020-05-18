import { Component, OnInit } from '@angular/core';
import { IslamicService } from '@syncfusion/ej2-angular-calendars';
import { addClass } from '@syncfusion/ej2-base';
import {  Injectable } from '@angular/core';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';

const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];
@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {

  /**
 * @function {getWeekdayShortName}-will give the user access to the weekdays
 *  @param {weekday}-variables to all the weekdays
 * @returns - returns the selected weekdays in hijri
 */
  getWeekdayShortName(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  /**
 * @function {getMonthShortName}-will give the user access to the months 
 * @param {month}-variables to all the months in hijri
 *  @returns - returns the selected short month's names in hijri
 */

  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  /**
 * @function {getMonthFullName}-will give the user access to the full months
 * @param {month}-variables to all the months in hijri
 *  @returns -returns the selected full month's names in hijri
 */

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  /**
 * @function {getDayAriaLabel}-will give the user access to the dates with arial label
 * @param {date}-the date variable
 *  @returns -returns the selected date
 */


  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-calendar',
  providers:[IslamicService,
    {provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura},
    {provide: NgbDatepickerI18n, useClass: IslamicI18n}
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
  }

  /**
 * @function {selectToday}- will give the date that the user selected
 * @param {void}
 * @returns {void}
 */

  selectToday() {
    this.model = this.calendar.getToday();
  }
  
}




