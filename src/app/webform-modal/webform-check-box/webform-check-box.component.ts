import { Component, OnInit } from '@angular/core';
import { WebformCheckBox } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-check-box',
  templateUrl: './webform-check-box.component.html',
  styleUrls: ['./webform-check-box.component.css']
})
export class WebformCheckBoxComponent implements OnInit {

  checkBoxModel = new WebformCheckBox('');

  _checked = false;

  constructor() { }

  _console(value) {
    console.log(value);
  }

  ngOnInit() {
  }

}
