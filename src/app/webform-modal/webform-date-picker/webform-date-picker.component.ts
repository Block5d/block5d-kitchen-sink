import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformDatePicker } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-date-picker',
  templateUrl: './webform-date-picker.component.html',
  styleUrls: ['./webform-date-picker.component.css']
})
export class WebformDatePickerComponent implements OnInit {

  @Output() saveDatePicker = new EventEmitter<any>();

  datePickerModel = new WebformDatePicker('', '', '');

  constructor() { }

  onSave(datePickerModel) {
    console.log(datePickerModel);
    this.saveDatePicker.emit(datePickerModel);
  }

  ngOnInit() {
  }

}
