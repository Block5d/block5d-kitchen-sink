import { Component, OnInit, Input } from '@angular/core';
import { WebformSelect, SelectModel, Select } from '../../shared/webform-modal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-webform-select',
  templateUrl: './webform-select.component.html',
  styleUrls: ['./webform-select.component.css']
})
export class WebformSelectComponent implements OnInit {

  // @Input() select: Select;

  selectModel = new WebformSelect('', '', '');
  jsonModel:String;

  dataSourceTypes = [
    { desc: "Values", value: "values" },
    { desc: "Json", value: "json" }
  ];

  dataSourceType = { value: "" };
  selectValueForm: FormGroup; 

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  wth(){
    console.log(this.dataSourceType)
  }

  onSave() {
    console.log(this.dataSourceType)
  }

  createForm() {
    this.selectValueForm = this.fb.group({
      dataArray: this.fb.array([])
    });
  }

  addField(){
    this.dataArray.push(this.fb.group(new SelectModel))
    console.log(this.dataArray.controls);
  }

  get dataArray(): FormArray {
    return this.selectValueForm.get('dataArray') as FormArray;
  };

  removeField(i){
    this.dataArray.removeAt(i);
  }

  // setSelectModels(selectModels: SelectModel[]) {
  //   const selectModelFGs = selectModels.map(selectModel => this.fb.group(selectModel));
  //   const addressFormArray = this.fb.array(selectModelFGs);
  //   this.selectValueForm.setControl('dataArray', addressFormArray);
  // }

  // ngOnChanges() {
  //   this.setSelectModels(this.select.selectModels);
  // }

  ngOnInit() {

  }

}
