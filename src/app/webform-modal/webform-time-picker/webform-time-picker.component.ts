import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformTimePicker } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-time-picker',
  templateUrl: './webform-time-picker.component.html',
  styleUrls: ['./webform-time-picker.component.css']
})
export class WebformTimePickerComponent implements OnInit {

  @Output() saveTimePicker = new EventEmitter<any>();

  timePickerModel = new WebformTimePicker('', '', '', null);

  constructor() { }

  onSave(timePickerModel) {
    console.log(timePickerModel);
    this.saveTimePicker.emit(timePickerModel);
  }

  ngOnInit() {
  }

}
