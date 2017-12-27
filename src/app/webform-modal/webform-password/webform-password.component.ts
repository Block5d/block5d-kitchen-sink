import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformPassword } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-password',
  templateUrl: './webform-password.component.html',
  styleUrls: ['./webform-password.component.css']
})
export class WebformPasswordComponent implements OnInit {

  @Output() savePassword = new EventEmitter<any>();

  passwordModel = new WebformPassword('', '', '', { required: false, unique: false, minlength: null, maxlength: null, error_massage: '' });

  constructor() { }

  onSave(passwordModel) {
    console.log(passwordModel);
    this.savePassword.emit(passwordModel);
  }

  ngOnInit() {
  }

}
