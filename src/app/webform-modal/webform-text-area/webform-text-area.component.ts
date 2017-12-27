import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformTextArea } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-text-area',
  templateUrl: './webform-text-area.component.html',
  styleUrls: ['./webform-text-area.component.css']
})
export class WebformTextAreaComponent implements OnInit {

  @Output() saveTextArea = new EventEmitter<any>();

  textAreaModel = new WebformTextArea('', '', '', null, null);

  constructor() { }

  onSave(textAreaModel) {
    console.log(textAreaModel);
    this.saveTextArea.emit(textAreaModel);
  }

  ngOnInit() {
  }

}
