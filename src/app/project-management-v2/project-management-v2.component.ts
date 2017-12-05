import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchProject } from '../shared/project-management';
import { ProjectManagement } from '../shared/project-management';
import { ProjectManagementService } from '../services/project-management.service';
import { Observable } from 'rxjs/Observable';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-management-v2',
  templateUrl: './project-management-v2.component.html',
  styleUrls: ['./project-management-v2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectManagementV2Component implements OnInit {

  private editProject: ProjectManagement;
  private projects: Observable<ProjectManagement[]>;
  result: ProjectManagement[] = [];
  model = new ProjectManagement('', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
  inputValue: string;
  editProjectModal=false;
  addProjectModal=false;
  isConfirmLoading = false;
  types = [];
  selectedTypes;
  maxSize: number = 5;
  totalItems: number = 0;
  currentPage: number = 1;
  numPages: number = 0;
  inited: boolean = false;
  itemsPerPage: number = +environment.itemPerPage;
  indexOnPage: number = 0;
  showSpinner = true;
  smodel = new SearchProject('', "name", this.currentPage, this.itemsPerPage);
  validateForm: FormGroup;

  constructor(
    private projectManagementService: ProjectManagementService,
    private fb: FormBuilder,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.projects = this.projectManagementService.getAllProjects(this.model);
  }

  showModal = (template) => {
    switch (template) {
      case 'editProjectModal' :
      this.editProjectModal = true; break;
      case 'addProjectModal' :
      this.addProjectModal = true; break;
    }
  }

  edit(project){
    this.editProjectModal=true;
    this.editProject = project;
  }

  handleOk = (e) => {
    this.projectManagementService.saveProject(this.model as ProjectManagement)
    .subscribe(project => {
      this.addSuccessToast('Successfully added', `Added ${this.model.name}`);
      this.projects = this.projectManagementService.getAllProjects(this.model);
      this.model = new ProjectManagement('', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
    });
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.editProjectModal = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel = (e) => {
    this.editProjectModal = false;
  }

  onSearch() {
    this.projects = this.projectManagementService.getAllProjects(this.model)
      .do(result => this.totalItems = result.length)
      .map(result => result);
    this.projects.subscribe(projects => this.result = projects);
  }

  getAllProjects(keyword, type) {
    return this.projectManagementService.searchProjects(keyword, type);
  }

  pageChanged(event): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.smodel.currentPerPage = event.page;
    this.smodel.itemsPerPage = event.itemsPerPage;
    this.indexOnPage = event.page * (this.itemsPerPage);
    this.projects = this.projectManagementService.getAllProjects(this.model)
      .do(result => {
        this.totalItems = result.length;
        var numPages = result.length / this.itemsPerPage;
        if (numPages > 1 && this.smodel.currentPerPage > 1) {
          var startIndex = (this.indexOnPage - this.itemsPerPage);
          var endIndex = this.indexOnPage - 1;
          this.result = result.slice(startIndex, endIndex);
        } else {
          this.result = result;
        }
        return this.result;
      })
      .map(result => result);
    this.projects.subscribe();
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
    this.types = [
      { value: 'name', label: 'Name' },
      { value: 'project_country', label: 'Country' }
    ];
    this.selectedTypes = this.types[0];


    this.projects.subscribe((x) => {
      this.showSpinner = false;
      this.totalItems = x.length;
      var numPages = x.length / this.itemsPerPage;
      if (numPages > 1) {
        this.result = x.slice(this.indexOnPage, this.itemsPerPage - 1);
      } else {
        this.result = x;
      }
    });

    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required ] ],
      start_date: [ null, [ Validators.required ] ],
      end_date: [ null, [ Validators.required ] ],
    });
  
  }

}


