import { Component, OnInit } from '@angular/core';
import { WebformTextField } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-text-field',
  templateUrl: './webform-text-field.component.html',
  styleUrls: ['./webform-text-field.component.css'],
})
export class WebformTextFieldComponent implements OnInit {

  textFieldModel = new WebformTextField('', '', '');
  models=[{label:"Name",placeholder:"Admin",description:"Your Name"},
  {label:"Address",placeholder:"Address",description:"Address"}]
  change(nzValue){
   //console.log(nzValue)
   for(let i=0;i<this.models.length;i++){
    if(this.models[i].label==nzValue){
      this.textFieldModel=this.models[i];
      //console.log(this.textFieldModel)
    }
   }
  }
  constructor() { }

  ngOnInit() {
  }

}
