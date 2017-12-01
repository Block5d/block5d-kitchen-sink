import { Component, OnInit,TemplateRef } from '@angular/core';
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

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  private groups : Observable<UserGroup[]>;
  private editGroup: UserGroup;
  modalRef: BsModalRef;
  submitted = false;
  model = new UserGroup('','',null,null,null);
  searchcondition = new UserGroupSearch('','project_id');

  myOptions: Array<IOption> = [
    {label: 'Belgium', value: 'BE'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Netherlands', value: 'NL'}
  ];
  conditions = [ { desc: "Project Id", value: "project_id"}, 
  {desc: "Group Name", value: "group_name"}];

  constructor(private modalService: BsModalService,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig,
    private userGroupService:UserGroupService
  ) {
    this.groups = this.getAllGroups(null);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit(){
    console.log(this.model);
    return this.userGroupService.saveUserGroup(this.model as UserGroup)
    .subscribe(group=>{
      this.addSuccessToast('Successfully added', `Added ${this.model}`);
    })
  }
  onDelete(group){
    this.userGroupService.deleteUserGroup(group as UserGroup)
    .subscribe(group=>{
      this.groups = this.getAllGroups(null);
      this.addSuccessToast('Delete successfully', `Delete ${group}`);
    })
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
  onSearch(){
    this.groups = this.getAllGroups(this.searchcondition.keyword,this.searchcondition.condition);
  }
  edit(group, template1:TemplateRef<any>){
    this.editGroup = group;
    this.modalRef = this.modalService.show(template1);
  }
  onEdit(){
    this.userGroupService.updateUserGroup(this.editGroup as UserGroup)
    .subscribe(group =>{
      this.groups = this.getAllGroups(null);
      this.addSuccessToast('Successfully updated', `Saved ${this.editGroup}`);
      this.modalRef.hide();
    })
  }


  ngOnInit() {
  }

  onChange(evt){
    // TODO ...
  }
  onCancel(){
    this.modalRef.hide();
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
