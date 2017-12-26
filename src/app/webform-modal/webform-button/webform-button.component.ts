import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WebformButton } from '../../shared/webform-modal';

@Component({
  selector: 'app-webform-button',
  templateUrl: './webform-button.component.html',
  styleUrls: ['./webform-button.component.css'],
})
export class WebformButtonComponent implements OnInit {

  @Output() saveButton = new EventEmitter<any>();

  buttonModel = new WebformButton('', '', '', '', null);

  actions = [{ desc: "Submit", value: "submit" }, { desc: "Reset", value: "reset" }];

  themes = [{ desc: "Default", value: "default" }, { desc: "Primary", value: "primary" },
  { desc: "Dashed", value: "dashed" }, { desc: "Danger", value: "danger" }];

  sizes = [{ desc: "Small", value: "small" }, { desc: "Medium", value: "default" }, { desc: "Large", value: "large" }];

  constructor() { }

  onSave(buttonModel) {
    console.log(buttonModel);
    this.saveButton.emit(buttonModel);
  }

  ngOnInit() {
  }

}
