import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformSelect, AddValueModel, Select } from '../../shared/webform-modal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-webform-select',
  templateUrl: './webform-select.component.html',
  styleUrls: ['./webform-select.component.css']
})
export class WebformSelectComponent implements OnInit {

  @Output() saveSelect = new EventEmitter<any>();

  // @Input() select: Select;

  selectModel = new WebformSelect('', '', '');
  jsonModel: String;
  models = [{ label: "Currency", placeholder: "", description: "Currency" },
  { label: "Country", placeholder: "", description: "Country" },
  { label: "City", placeholder: "", description: "City" },
  { label: "Nationality", placeholder: "", description: "Nationality" }]
  change(nzValue) {
    //console.log(nzValue)
    for (let i = 0; i < this.models.length; i++) {
      if (this.models[i].label == nzValue) {
        this.selectModel = this.models[i];
        //console.log(this.textFieldModel)
      }
    }
  }
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

  wth() {
    console.log(this.dataSourceType)
  }

  onSave(selectModel) {
    console.log(selectModel);
    this.saveSelect.emit(selectModel);
  }


  createForm() {
    this.selectValueForm = this.fb.group({
      dataArray: this.fb.array([])
    });
  }

  addField() {
    this.dataArray.push(this.fb.group(new AddValueModel))
    console.log(this.dataArray.controls);
  }

  get dataArray(): FormArray {
    return this.selectValueForm.get('dataArray') as FormArray;
  };

  removeField(i) {
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
