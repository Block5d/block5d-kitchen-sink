import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformCheckBox } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-check-box',
  templateUrl: './webform-check-box.component.html',
  styleUrls: ['./webform-check-box.component.css']
})
export class WebformCheckBoxComponent implements OnInit {

  @Output() saveCheckBox = new EventEmitter<any>();

  checkBoxModel = new WebformCheckBox('', null);

  _checked = false;

  constructor() { }

  _console(value) {
    console.log(value);
  }

  onSave(checkBoxModel) {
    console.log(checkBoxModel);
    this.saveCheckBox.emit(checkBoxModel);
  }

  ngOnInit() {
  }

}
