import { Component, OnInit } from '@angular/core';
import { WebformPassword } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-password',
  templateUrl: './webform-password.component.html',
  styleUrls: ['./webform-password.component.css']
})
export class WebformPasswordComponent implements OnInit {

  passwordModel = new WebformPassword('', '', '');

  constructor() { }

  ngOnInit() {
  }

}
