import { Component, OnInit } from '@angular/core';
import { WebformRadio, AddValueModel } from '../../shared/webform-modal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-webform-radio',
  templateUrl: './webform-radio.component.html',
  styleUrls: ['./webform-radio.component.css']
})
export class WebformRadioComponent implements OnInit {

  radioModel = new WebformRadio('');
  radioForm:FormGroup;

  constructor(
    private fb:FormBuilder
  ) {
    this.createForm();
   }

  createForm() {
    this.radioForm = this.fb.group({
      dataArray: this.fb.array([])
    });
  }

  addField(){
    this.dataArray.push(this.fb.group(new AddValueModel))
    console.log(this.dataArray.controls);
  }

  get dataArray(): FormArray {
    return this.radioForm.get('dataArray') as FormArray;
  };

  removeField(i){
    this.dataArray.removeAt(i);
  }

  ngOnInit() {
  }

}
