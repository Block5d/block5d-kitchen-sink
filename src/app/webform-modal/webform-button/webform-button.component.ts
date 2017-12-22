import { Component, OnInit } from '@angular/core';
import { WebformButton } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-button',
  templateUrl: './webform-button.component.html',
  styleUrls: ['./webform-button.component.css'],
})
export class WebformButtonComponent implements OnInit {

  buttonModel = new WebformButton('', '', '', '');

  actions = [{ desc: "Submit", value: "submit" }, { desc: "Reset", value: "reset" }];

  themes = [{ desc: "Default", value: "default" }, { desc: "Primary", value: "primary" },
  { desc: "Dashed", value: "dashed" }, { desc: "Danger", value: "danger" }];

  sizes = [{ desc: "Small", value: "small" }, { desc: "Medium", value: "default" }, { desc: "Large", value: "large" }];

  constructor() { }

  ngOnInit() {
  }

}
