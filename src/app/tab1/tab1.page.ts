import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  reminders: string[] = [];
  newReminder: string;

  stickyNotes: string[] = [];
  newStickyNote: string;

  addReminder() {
    if (this.newReminder) {
      this.reminders.push(this.newReminder);
      this.newReminder = '';
    }
  }

  removeReminder(index: number) {
    this.reminders.splice(index, 1);
  }

  addStickyNote() {
    if (this.newStickyNote) {
      this.stickyNotes.push(this.newStickyNote);
      this.newStickyNote = '';
    }
  }

  removeStickyNote(index: number) {
    this.stickyNotes.splice(index, 1);
  }


  constructor() {}

}
