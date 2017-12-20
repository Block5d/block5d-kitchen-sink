import { Component, OnInit } from '@angular/core';
import { WebformTextField } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-text-field',
  templateUrl: './webform-text-field.component.html',
  styleUrls: ['./webform-text-field.component.css'],
})
export class WebformTextFieldComponent implements OnInit {

  textFieldModel = new WebformTextField('', '', '');

  constructor() { }

  ngOnInit() {
  }

}
