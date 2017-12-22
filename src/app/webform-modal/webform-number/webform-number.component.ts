import { Component, OnInit } from '@angular/core';
import { WebformNumber } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-number',
  templateUrl: './webform-number.component.html',
  styleUrls: ['./webform-number.component.css']
})
export class WebformNumberComponent implements OnInit {

  numberModel = new WebformNumber('', '', '');

  constructor() { }

  ngOnInit() {
  }

}
