import { Component, OnInit } from '@angular/core';
import { WebformSelect } from '../../shared/webform-modal';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-webform-select',
  templateUrl: './webform-select.component.html',
  styleUrls: ['./webform-select.component.css']
})
export class WebformSelectComponent implements OnInit {

  selectModel = new WebformSelect('', '', '');

  dataSourceTypes = [{ desc: "Values", value: "values" }, { desc: "Json", value: "json" }];

  data = [];
  controlArray = [];
  dataSourceType;
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
  }

  onSave(){
    console.log(this.dataSourceType)
  }

  addField(e?: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    const id = (this.controlArray.length > 0) ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;

    var control = {desc: '',value: ''};
    const index = this.controlArray.push(control);
    this.controlArray.push(control);
    console.log(this.controlArray[this.controlArray.length - 1]);
    this.validateForm.addControl(this.controlArray[index - 1].controlInstance, new FormControl(null, Validators.required));
  }

  removeField(i, e: MouseEvent) {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
      console.log(this.controlArray);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.addField();
  }

}
