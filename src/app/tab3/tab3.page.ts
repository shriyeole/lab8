import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  date: string;
  dateRange: { from: string; to: string; };
  type: 'string';
  dateMulti: string[];
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'};
    optionsRange: CalendarComponentOptions = {
      pickMode: 'range'
    };
  constructor() {}
  onChange($event: any) {
    console.log($event);
  }
}
