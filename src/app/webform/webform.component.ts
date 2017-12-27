import { Component, OnInit } from '@angular/core';
import { WebForm } from '../shared/web-form';
import { WebformService} from '../services/webform.service';
import { DragulaService } from 'ng2-dragula';
import { WebformTextFieldComponent } from '../webform-modal/webform-text-field/webform-text-field.component'
import { WebformButtonComponent } from '../webform-modal/webform-button/webform-button.component'
import { WebformCheckBoxComponent } from '../webform-modal/webform-check-box/webform-check-box.component'
import { WebformHtmlElementComponent } from '../webform-modal/webform-html-element/webform-html-element.component'
import { WebformNumberComponent } from '../webform-modal/webform-number/webform-number.component'
import { WebformPasswordComponent } from '../webform-modal/webform-password/webform-password.component'
import { WebformRadioComponent } from '../webform-modal/webform-radio/webform-radio.component'
import { WebformSelectComponent } from '../webform-modal/webform-select/webform-select.component'
import { WebformSelectBoxesComponent } from '../webform-modal/webform-select-boxes/webform-select-boxes.component'
import { WebformTextAreaComponent } from '../webform-modal/webform-text-area/webform-text-area.component'


@Component({
  selector: 'app-webform',
  templateUrl: './webform.component.html',
  styleUrls: ['./webform.component.css']
})
export class WebformComponent implements OnInit {
  model = new WebForm('','','',null,null,null);
  contents = [];
  onSave(){
    console.log(this.model)
    this.model.content=this.contents;
    this.webformService.saveWebform(this.model as WebForm)
  }
  constructor(
    private webformService:WebformService,
    private dragulaService:DragulaService
  ) {
    dragulaService.setOptions('bag-one', {
      copy: true
    });
   } 

   

  ngOnInit() {
  }

}
