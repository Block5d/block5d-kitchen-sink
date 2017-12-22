import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { Workflow,Status } from '../shared/workflow'
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { WorkflowService } from '../services/workflow.service'
import { WorkflowSubmitService } from '../services/workflow-submit.service'
import { environment } from '../../environments/environment';
import * as _ from 'lodash';
@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkflowComponent implements OnInit {
  public  allStatuses : Status[];
  validateForm: FormGroup;
  submitted = false;
  project_ids = [ { desc: "Project Id", value: "project_id"}, 
  {desc: "Group Name", value: "group_name"}];
  model = new Workflow('','','','','',null,null);
  status = new Status('','');

  constructor(private fb: FormBuilder,
  private workflowService:WorkflowService,
  private workflowSubmitService:WorkflowSubmitService,
  private toastyService:ToastyService, 
  private toastyConfig: ToastyConfig) { 
    this.workflowService.getAllStatus().subscribe(statuses=>{this.allStatuses = statuses;});
    
    
  }

  
  ngOnInit() {
    
    this.validateForm = this.fb.group({
      project_id: [ "", [ Validators.required ] ],
      status_desc: [ "", [ Validators.required ] ],
      status_code: [ "", [ Validators.required ] ],
      from_status: [ "", [ Validators.required ] ],
      to_status: [ "", [ Validators.required ] ],
      rules: [ "", [ Validators.required ] ],
      action: [ "", [ Validators.required ] ]
    });
  }
  getAllStatus(){
    return this.workflowService.getAllStatus()
  }
  addStatus(status){
    console.log(status);
    this.workflowService.saveStatus(status as Status)
    .subscribe(status=>{
      this.addSuccessToast('Successfully added', `Added ${this.status}`)
      this.validateForm.reset();
    })
    
  }
  resetForm() {
    this.validateForm.reset();
  }
  onChange(evt){
    // TODO ...
  }
  submit(model){
    console.log(model);
    this.workflowSubmitService.saveWorkflow(model as Workflow)
    .subscribe(model=>{
      this.addSuccessToast('Successfully added', `Added ${this.model}`)
      this.validateForm.reset();
    })

  }
  addSuccessToast(title,msg) {
    var toastOptions:ToastOptions = {
        title: title,
        msg: msg,
        showClose: true,
        timeout: 1500,
        theme: 'bootstrap',
        onAdd: (toast:ToastData) => {
            console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function(toast:ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    this.toastyService.success(toastOptions);
  }
}
