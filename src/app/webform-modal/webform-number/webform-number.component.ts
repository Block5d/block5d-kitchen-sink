import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformNumber } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-number',
  templateUrl: './webform-number.component.html',
  styleUrls: ['./webform-number.component.css']
})
export class WebformNumberComponent implements OnInit {

  @Output() saveNumber = new EventEmitter<any>();

  numberModel = new WebformNumber('', '', '', null);
  models = [{ label: "Phone Num", placeholder: "", description: "Phone Num", validation: null },
  { label: "Fax Num", placeholder: "", description: "Fax Num", validation: null },
  { label: "Precentage", placeholder: "", description: "Precentage", validation: null },
  { label: "Postal Code", placeholder: "", description: "Postal Code", validation: null }]
  change(nzValue) {
    //console.log(nzValue)
    for (let i = 0; i < this.models.length; i++) {
      if (this.models[i].label == nzValue) {
        this.numberModel = this.models[i];
        //console.log(this.textFieldModel)
      }
    }
  }
  constructor() { }

  onSave(numberModel) {
    console.log(numberModel);
    this.saveNumber.emit(numberModel);
  }


  ngOnInit() {
  }

}
