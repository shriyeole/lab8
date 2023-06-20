import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions;

  constructor() { }

  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', date: '2023-06-13' },
        { title: 'Event 2', date: '2023-06-15' },
      ],
    };
  }
}
