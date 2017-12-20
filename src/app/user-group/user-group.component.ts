import { Component, OnInit,TemplateRef ,ViewEncapsulation} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent} from '../app.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { IOption} from 'ng-select';
import { UserGroup} from '../shared/user-group';
import { UserGroupSearch} from '../shared/user-group';
import { UserGroupService} from '../services/user-group.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { environment } from '../../environments/environment';
import * as _ from 'lodash';
@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserGroupComponent implements OnInit {
  private groups : Observable<UserGroup[]>;
  model = new UserGroup('','',null,null,null);
  searchcondition = new UserGroupSearch('','project_id');

  myOptions = [
    {label: 'Belgium', value: 'BE'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Netherlands', value: 'NL'}
  ];
  
  conditions = [ { desc: "Project Id", value: "project_id"}, 
  {desc: "Group Name", value: "group_name"}];
  addform = false;
  editform = false;
  validateForm: FormGroup;

  constructor(private modalService: BsModalService,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig,
    private userGroupService:UserGroupService,
    private fb: FormBuilder) {
      this.groups = this.getAllGroups(null);
     }

  add = () => {
    this.validateForm.reset();
    this.addform = true;
  }
  submit(){
    console.log(this.model);
    return this.userGroupService.saveUserGroup(this.model as UserGroup)
    .subscribe(group=>{
    this.addSuccessToast('Successfully added', `Added ${this.model}`);
    this.validateForm.reset();
    this.addform = false;
    this.groups = this.getAllGroups(null);
    })
      
   }
  cancel = (e) => {
    console.log(e);
    this.validateForm.reset();
    this.addform = false;
  }
  onSearch(){
    this.groups = this.getAllGroups(this.searchcondition.keyword,this.searchcondition.condition);
  }
  onDelete(group){
    this.userGroupService.deleteUserGroup(group as UserGroup)
    .subscribe(group=>{
      this.groups = this.getAllGroups(null);
      this.addSuccessToast('Delete successfully', `Delete ${group}`);
      this.groups = this.getAllGroups(null);
    })
  }
  editGroup = new  UserGroup('','',null,null,null);
  edit = (group) => {
    this.editGroup = group;
    this.editform = true;
  }
  editCancel = (e) => {
    console.log(e);
    this.editform = false;
  }
  onEdit(){
    console.log("Saving edit ...");
    this.userGroupService.updateUserGroup(this.editGroup as UserGroup)
    .subscribe(group =>{
      this.groups = this.getAllGroups(null);
      this.addSuccessToast('Successfully updated', `Saved ${this.editGroup}`);
      this.editform = false;
    });
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      project_id: [ null, [ Validators.required ] ],
      group_name: [ null, [ Validators.required ] ],
      members: [ null, [ Validators.required ] ]
    });
  }

  getAllGroups(keyword:string,value:string):any;
  getAllGroups(keyword:null,value?:string):any;
  getAllGroups(keyword,value?:string):any{
    if (keyword == null || typeof keyword == 'undefined'){
      //console.log(123);
      return  this.userGroupService.getAllGroups(null);
    }else{
      console.log(keyword);
      return this.userGroupService.searchGroup(keyword,value);
    }  
  }
  onChange(evt){
    // TODO ...
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
