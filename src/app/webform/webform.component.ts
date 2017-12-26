import { Component, OnInit } from '@angular/core';
import { WebForm } from '../shared/web-form';
import { WebformService} from '../services/webform.service';

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
  constructor(private webformService:WebformService) { } 

  ngOnInit() {
  }

}
