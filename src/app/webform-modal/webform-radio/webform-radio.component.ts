import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformRadio, AddValueModel } from '../../shared/webform-modal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-webform-radio',
  templateUrl: './webform-radio.component.html',
  styleUrls: ['./webform-radio.component.css']
})
export class WebformRadioComponent implements OnInit {

  @Output() saveRadio = new EventEmitter<any>();

  radioModel = new WebformRadio('');
  radioForm: FormGroup;
  models = [{ label: "gender" }]
  change(nzValue) {
    //console.log(nzValue)
    for (let i = 0; i < this.models.length; i++) {
      if (this.models[i].label == nzValue) {
        this.radioModel = this.models[i];
        //console.log(this.textFieldModel)
      }
    }
  }
  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  onSave(radioModel) {
    console.log(radioModel);
    this.saveRadio.emit(radioModel);
  }

  createForm() {
    this.radioForm = this.fb.group({
      dataArray: this.fb.array([])
    });
  }

  addField() {
    this.dataArray.push(this.fb.group(new AddValueModel))
    console.log(this.dataArray.controls);
  }

  get dataArray(): FormArray {
    return this.radioForm.get('dataArray') as FormArray;
  };

  removeField(i) {
    this.dataArray.removeAt(i);
  }

  ngOnInit() {
  }

}
