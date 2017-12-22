import { Component, OnInit } from '@angular/core';
import { WebformTextArea } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-text-area',
  templateUrl: './webform-text-area.component.html',
  styleUrls: ['./webform-text-area.component.css']
})
export class WebformTextAreaComponent implements OnInit {

  textAreaModel = new WebformTextArea('', '', '', null);

  constructor() { }

  ngOnInit() {
  }

}
