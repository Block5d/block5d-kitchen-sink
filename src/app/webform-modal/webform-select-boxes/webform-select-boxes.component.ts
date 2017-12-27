import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformSelectBoxes, AddValueModel, SelectBoxesValue } from '../../shared/webform-modal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-webform-select-boxes',
  templateUrl: './webform-select-boxes.component.html',
  styleUrls: ['./webform-select-boxes.component.css']
})
export class WebformSelectBoxesComponent implements OnInit {

  @Output() saveSelectBoxes = new EventEmitter<any>();

  selectBoxesModel = new WebformSelectBoxes('', null, { required: false, error_massage: '' });
  selectBoxesForm: FormGroup;
  selectBoxesValue = [];

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  onSave(selectBoxesModel) {
    selectBoxesModel.selectBoxesValues = this.dataArray.value
    console.log(selectBoxesModel);
    this.saveSelectBoxes.emit(selectBoxesModel);
  }

  createForm() {
    this.selectBoxesForm = this.fb.group({
      dataArray: this.fb.array([])
    });
  }

  addField() {
    this.dataArray.push(this.fb.group(new SelectBoxesValue))
    console.log(this.dataArray);
    console.log(this.dataArray.controls);
  }

  get dataArray(): FormArray {
    return this.selectBoxesForm.get('dataArray') as FormArray;
  };

  removeField(i) {
    this.dataArray.removeAt(i);
  }

  ngOnInit() {
  }

}
