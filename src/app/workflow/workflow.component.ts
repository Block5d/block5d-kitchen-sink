import { Component, OnInit } from '@angular/core';
import { Workflow } from '../shared/workflow'
@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  submitted = false;
  project_ids = [ { desc: "Project Id", value: "project_id"}, 
  {desc: "Group Name", value: "group_name"}];
  model = new Workflow('',null,null);
  constructor() { }

  ngOnInit() {
  }
  onChange(evt){
    // TODO ...
  }
}
