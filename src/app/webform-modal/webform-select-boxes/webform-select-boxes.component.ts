import { Component, OnInit } from '@angular/core';
import { WebformSelectBoxes, AddValueModel } from '../../shared/webform-modal';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-webform-select-boxes',
  templateUrl: './webform-select-boxes.component.html',
  styleUrls: ['./webform-select-boxes.component.css']
})
export class WebformSelectBoxesComponent implements OnInit {

  selectBoxesModel = new WebformSelectBoxes('');
  selectBoxesForm:FormGroup;

  constructor(
    private fb:FormBuilder
  ) { 
    this.createForm();
  }


  createForm() {
    this.selectBoxesForm = this.fb.group({
      dataArray: this.fb.array([])
    });
  }

  addField(){
    this.dataArray.push(this.fb.group(new AddValueModel))
    console.log(this.dataArray.controls);
  }

  get dataArray(): FormArray {
    return this.selectBoxesForm.get('dataArray') as FormArray;
  };

  removeField(i){
    this.dataArray.removeAt(i);
  }

  ngOnInit() {
  }

}
