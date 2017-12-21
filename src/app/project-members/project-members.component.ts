import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectMembers } from '../shared/project-members';
import { SearchProjectMembers } from '../shared/project-members';
import { PersonManagement } from '../shared/person-management';
import { ProjectManagement } from '../shared/project-management';
import { ProjectMembersService } from '../services/project-members.service';
import { ProjectManagementService } from '../services/project-management.service';
import { PersonManagementService } from '../services/person-management.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']
})
export class ProjectMembersComponent implements OnInit {


  private projectMembers:Observable<ProjectMembers[]>;
  private projects:Observable<ProjectManagement[]>;
  private persons:Observable<PersonManagement[]>;
  editProjectMember = new ProjectMembers('', '', '', true, new Date(), new Date(), '', '');;
  model = new ProjectMembers('', '', '', true, new Date(), new Date(), '', '');
  projectModel = new ProjectManagement(null, '', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
  personModel = new PersonManagement('', '', '', null, '', null, '', null, '', '', '', '', new Date(), new Date(), '', '');
  validateForm: FormGroup;
  validateEditForm: FormGroup;
  editProjectMemberModal = false;
  result: ProjectMembers[] = [];
  maxSize: number = 5;
  totalItems: number = 0;
  currentPage: number = 1;
  numPages: number = 0;
  inited: boolean = false;
  itemsPerPage: number = +environment.itemPerPage;
  indexOnPage: number = 0;
  showSpinner = true;
  smodel = new SearchProjectMembers('', "name", this.currentPage, this.itemsPerPage);

  constructor(
    private projectMembersService:ProjectMembersService,
    private projectManagementService:ProjectManagementService,
    private personManagementService:PersonManagementService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private fb: FormBuilder
  ) { 
    this.projectMembers = this.projectMembersService.getAllPromems(this.model);
    this.projects = this.projectManagementService.getAllProjects(this.projectModel);
    this.persons = this.personManagementService.getAllPersons(this.personModel);
  }

  onSubmit() {
    this.projectMembersService.savePromem(this.model as ProjectMembers)
      .subscribe(projectMember => {
        this.addSuccessToast('Successfully added', `Added ${this.model.person_id}`);
        this.projectMembers = this.projectMembersService.getAllPromems(this.model);
      });
  }

  onDelete(projectMember) {
    this.projectMembersService.deletePromem(projectMember as ProjectMembers)
      .subscribe(projectMember => {
        this.projectMembers = this.projectMembersService.getAllPromems(this.model);
        this.addSuccessToast('Delete successfully', `Delete ${this.model.person_id}`);
      });
  }

  onEnable(projectMember) {
        this.editProjectMember = projectMember;
        this.editProjectMember.isEnabled = !this.editProjectMember.isEnabled;
        //this.editPromem.isEnabled = this.checkModel.isEnabled
        this.projectMembersService.updatePromem(this.editProjectMember as ProjectMembers)
          .subscribe(projectMember => {
            this.projectMembers = this.projectMembersService.getAllPromems(this.model);
            this.addSuccessToast('Update successfully', `Update done`);
          });
      }

  edit(projectMember){
      this.editProjectMember = projectMember;
      this.editProjectMember.modified_date = new Date();
      this.editProjectMemberModal = true;
    
  }

  onEdit() {
    //console.log("Saving edit ...");
    this.projectMembersService.updatePromem(this.editProjectMember as ProjectMembers)
      .subscribe(projectMember => {
        this.addSuccessToast('Successfully updated', `Saved ${this.editProjectMember.person_id}`);
        this.projectMembers = this.projectMembersService.getAllPromems(this.model);
        this.editProjectMemberModal = false;
      });
  }

  closeModal(template) {
        this.editProjectMemberModal = false; 
  }

  pageChanged(event): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.smodel.currentPerPage = event.page;
    this.smodel.itemsPerPage = event.itemsPerPage;
    this.indexOnPage = event.page * (this.itemsPerPage);
    this.projectMembers = this.projectMembersService.getAllPromems(this.model)
      .do(result => {
        this.totalItems = result.length;
        const numPages = result.length / this.itemsPerPage;
        console.log(numPages);
        if ( numPages > 1 && this.smodel.currentPerPage > 1) {
          const startIndex  = (this.indexOnPage - this.itemsPerPage);
          const endIndex = this.indexOnPage;
          this.result = result.slice(startIndex, endIndex);
        }else {
          this.result = result.slice(0, +environment.itemPerPage);
        }
        return this.result;
      })
      .map(result => result);
    this.projectMembers.subscribe();
  }

  addSuccessToast(title, msg) {
    var toastOptions: ToastOptions = {
      title: title,
      msg: msg,
      showClose: true,
      timeout: 1500,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    this.toastyService.success(toastOptions);
  }

  ngOnInit() {

    this.projectMembers.subscribe((x) => {
      this.showSpinner = false;
      this.totalItems = x.length;
      console.log('forever subscribe ...');
      this.result = x.slice(this.indexOnPage, this.itemsPerPage);
    });

    this.validateForm = this.fb.group({
      project_id: [ null, [ Validators.required ] ],
      person_id: [ null, [ Validators.required ] ]
    });

    this.validateEditForm = this.fb.group({
      project_id: [ null, [ Validators.required ] ],
    });

  }

}
 