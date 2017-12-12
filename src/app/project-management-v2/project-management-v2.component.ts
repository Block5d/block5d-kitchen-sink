import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegistrationCompany } from '../shared/reg-company';
import { PersonManagement } from '../shared/person-management';
import { SearchProject } from '../shared/project-management';
import { ProjectManagement } from '../shared/project-management';
import { ProjectManagementService } from '../services/project-management.service';
import { RegCompanyService } from '../services/reg-company.service';
import { PersonManagementService } from '../services/person-management.service';
import { Observable } from 'rxjs/Observable';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { environment } from '../../environments/environment';
import * as _ from 'lodash';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-project-management-v2',
  templateUrl: './project-management-v2.component.html',
  styleUrls: ['./project-management-v2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectManagementV2Component implements OnInit {

  private projects: Observable<ProjectManagement[]>;
  private companies: RegistrationCompany[];
  private persons: PersonManagement[];
  result: ProjectManagement[] = [];
  model = new ProjectManagement('', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
  editProject = new ProjectManagement('', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
  personModel = new PersonManagement('', '', '', null, '', null, '', null, '', '', '', '', new Date(), new Date(), '', '');
  inputValue: string;
  editProjectModal = false; addProjectModal = false;
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
  mainCompanies: any = [];
  subcontratorCompanies: any = [];
  supplierCompanies: any = [];
  projectManagers: any = [];
  architects: any = [];
  designArchitects: any = [];
  quantitySurveyors: any = [];
  consultantEngineers: any = [];
  serviceEngineers: any = [];

  types = [
    { value: 'name', label: 'Name' },
    { value: 'project_country', label: 'Country' }
  ];

  project_countries = [{ desc: "America", value: "us" },
  { desc: "China", value: "ch" }, { desc: "Singapore", value: "sg" },
  { desc: "English", value: "ed" }, { desc: "Janpan", value: "jan" }];

  contract_currencies = [{ desc: "CNY", value: "c" },
  { desc: "USD", value: "u" }, { desc: "SGD", value: "s" },
  { desc: "ED", value: "e" }, { desc: "VG", value: "v" }];

  constructor(
    private projectManagementService: ProjectManagementService,
    private regCompanyService: RegCompanyService,
    private personManagementService: PersonManagementService,
    private fb: FormBuilder,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.projects = this.projectManagementService.getAllProjects(this.model);
    this.regCompanyService.getAllCompanies(null).subscribe(resultCompany => this.companies = resultCompany);
    this.personManagementService.getAllPersons(this.personModel).subscribe(resultPerson => this.persons = resultPerson);
  }

  getPersons(persons) {
    console.log(persons);
    for (let j = 0; j < persons.length; j++) {
      switch (persons[j].provider_type) {
        case 'project_manager_person':
          this.projectManagers.push(persons[j]); break;
        case 'architect_person':
          this.architects.push(persons[j]); break;
        case 'design_architect_person':
          this.designArchitects.push(persons[j]); break;
        case 'quantity_surveyor_person':
          this.quantitySurveyors.push(persons[j]); break;
        case 'cs_engineer_person':
          this.consultantEngineers.push(persons[j]); break;
        case 'service_engineer_person':
          this.serviceEngineers.push(persons[j]); break;
      }
    }
  }

  getCompanies(companies) {
    console.log(companies)
    for (let i = 0; i < companies.length; i++) {
      switch (companies[i].company_type) {
        case 'main_contractor_company':
          this.mainCompanies.push(companies[i]); break;
        case 'subcontractors':
          this.subcontratorCompanies.push(companies[i]); break;
        case 'suppliers':
          this.supplierCompanies.push(companies[i]); break;
      }
    }
  }

  openModal(template) {
    if (this.mainCompanies.length == 0 || this.subcontratorCompanies.length == 0 || this.supplierCompanies.length == 0) {
      this.getCompanies(this.companies);
    }
    if (this.projectManagers.length == 0 || this.architects.length == 0 || this.designArchitects.length == 0 || this.quantitySurveyors.length == 0 || this.consultantEngineers.length == 0 || this.serviceEngineers.length == 0) {
      this.getPersons(this.persons);
      console.log(this.projectManagers);
    }
    this.addProjectModal = true;
  }

  closeModal(template) {
    switch (template) {
      case 'editProjectModal':
        this.editProjectModal = false; break;
      case 'addProjectModal':
        this.projects = this.projectManagementService.getAllProjects(this.model);
        this.addProjectModal = false; break;
    }
  }

  edit(project) {
    if (this.mainCompanies.length == 0 || this.subcontratorCompanies.length == 0 || this.supplierCompanies.length == 0) {
      this.getCompanies(this.companies);
    }
    if (this.projectManagers.length == 0 || this.architects.length == 0 || this.designArchitects.length == 0 || this.quantitySurveyors.length == 0 || this.consultantEngineers.length == 0 || this.serviceEngineers.length == 0) {
      this.getPersons(this.persons);
    }
    this.editProject = project;
    this.editProject.modified_date = new Date();
    this.editProject.start_date = new Date(project.start_date);
    this.editProject.end_date = new Date(project.end_date);
    this.editProject.client_company = project.project_members.client_company;
    this.editProject.project_manager_person = project.project_members.project_manager_person;
    this.editProject.architect_person = project.project_members.architect_person;
    this.editProject.design_architect_person = project.project_members.design_architect_person;
    this.editProject.quantity_surveyor_person = project.project_members.quantity_surveyor_person;
    this.editProject.cs_engineer_person = project.project_members.cs_engineer_person;
    this.editProject.service_engineer_person = project.project_members.service_engineer_person;
    this.editProject.main_contractor_company = project.project_members.main_contractor_company;
    this.editProject.subcontractors = project.project_members.subcontractors;
    this.editProject.suppliers = project.project_members.suppliers;
    this.editProject.contact_no = project.contacts.contact_no;
    this.editProject.company_email = project.contacts.company_email;
    this.editProject.fax_no = project.contacts.fax_no;
    this.editProject.site_possession = project.project_progress.site_possession;
    this.editProject.completion_date = new Date(project.project_progress.completion_date);
    this.editProject.contract_currency = project.project_progress.contract_currency;
    this.editProject.contract_sum = project.project_progress.contract_sum;
    this.editProject.contract_duration_base = new Date(project.project_progress.contract_duration_base);
    this.editProject.contract_duration_remaining = new Date(project.project_progress.contract_duration_remaining);
    this.editProject.pct_work_done = project.project_progress.pct_work_done;
    this.editProject.remarks = project.project_progress.remarks;
    this.editProject.site_issues = project.project_progress.site_issues;
    this.editProject.desc = project.project_monitoring.desc;
    this.editProject.planned_start_date = new Date(project.project_monitoring.planned_start_date);
    this.editProject.actual_start_date = new Date(project.project_monitoring.actual_start_date);
    this.editProject.planned_end_date = new Date(project.project_monitoring.planned_end_date);
    this.editProject.actual_end_date = new Date(project.project_monitoring.actual_end_date);
    this.editProject.pct_completed_planned = project.project_monitoring.pct_completed_planned;
    this.editProject.pct_completed_actual = project.project_monitoring.pct_completed_actual;
    this.editProject.pct_completed_1wktarget = project.project_monitoring.pct_completed_1wktarget;
    this.editProject.remark = project.project_monitoring.remark;
    this.editProjectModal = true;
  }

  onEdit() {
    //console.log("Saving edit ...");
    this.projectManagementService.updateProject(this.editProject as ProjectManagement)
      .subscribe(project => {
        this.addSuccessToast('Successfully updated', `Saved ${this.editProject.name}`);
        this.projects = this.projectManagementService.getAllProjects(this.model);
        this.editProjectModal = false;
      });
  }

  onSubmit() {
    //console.log(this.model.subcontractors)
    this.projectManagementService.saveProject(this.model as ProjectManagement)
      .subscribe(project => {
        this.addSuccessToast('Successfully added', `Added ${this.model.name}`);
        this.projects = this.projectManagementService.getAllProjects(this.model);
        this.model = new ProjectManagement('', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
        this.addProjectModal = false;
      });
  }

  onDelete(project) {
    this.projectManagementService.deleteProject(project as ProjectManagement)
      .subscribe(project => {
        this.projects = this.projectManagementService.getAllProjects(this.model);
        this.addSuccessToast('Delete successfully', `Delete ${project.name}`);
      });
  }

  onSearch() {
    console.log(this.smodel.keyword);
    console.log(this.smodel.type);
    this.projects = this.projectManagementService.getAllProjects(this.smodel)
      .do(result => this.totalItems = result.length)
      .map(result => result);
    this.projects.subscribe(projects => this.result = projects);
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
        const numPages = result.length / this.itemsPerPage;
        console.log(numPages);
        if (numPages > 1 && this.smodel.currentPerPage > 1) {
          const startIndex = (this.indexOnPage - this.itemsPerPage);
          const endIndex = this.indexOnPage;
          this.result = result.slice(startIndex, endIndex);
        } else {
          this.result = result.slice(0, +environment.itemPerPage);
        }
        return this.result;
      })
      .map(result => result);
    this.projects.subscribe();
  }

  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, email: true };
    }
  };

  endDayValidator = (control: FormControl): any => {
    if (new Date(control.value) < new Date(this.model.start_date)) {
      return { expired: true, error: true }
    }
  };

  plannedEndDayValidator = (control: FormControl): any => {
    if (new Date(control.value) < new Date(this.model.planned_start_date)) {
      return { expired: true, error: true }
    }
  };

  actualEndDayValidator = (control: FormControl): any => {
    if (new Date(control.value) < new Date(this.model.actual_start_date)) {
      return { expired: true, error: true }
    }
  };

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

    this.projects.subscribe((x) => {
      this.showSpinner = false;
      this.totalItems = x.length;
      console.log('forever subscribe ...');
      this.result = x.slice(this.indexOnPage, this.itemsPerPage);
    });

    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      start_date: [null, [Validators.required]],
      end_date: [null, [this.endDayValidator]],
      client_company: ['', [Validators.required]],
      project_manager_person: ['', [Validators.required]],
      architect_person: ['', [Validators.required]],
      design_architect_person: ['', [Validators.required]],
      quantity_surveyor_person: ['', [Validators.required]],
      cs_engineer_person: ['', [Validators.required]],
      service_engineer_person: ['', [Validators.required]],
      main_contractor_company: [null, [Validators.required]],
      subcontractors: [null, [Validators.required]],
      suppliers: [null, [Validators.required]],
      contact_no: [null, [Validators.required]],
      company_email: ['', [this.emailValidator]],
      fax_no: [null, [Validators.required]],
      project_country: ['', [Validators.required]],
      site_possession: ['', [Validators.required]],
      completion_date: [null, [Validators.required]],
      contract_currency: ['', [Validators.required]],
      contract_sum: [null, [Validators.required]],
      contract_duration_base: [null, [Validators.required]],
      contract_duration_remaining: [null, [Validators.required]],
      pct_work_done: [null, [Validators.required]],
      remarks: ['', [Validators.required]],
      site_issues: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      planned_start_date: [null, [Validators.required]],
      actual_start_date: [null, [Validators.required]],
      planned_end_date: [null, [this.plannedEndDayValidator]],
      actual_end_date: [null, [this.actualEndDayValidator]],
      pct_completed_planned: [null, [Validators.required]],
      pct_completed_actual: [null, [Validators.required]],
      pct_completed_1wktarget: [null, [Validators.required]],
      remark: ['', [Validators.required]],
    });

  }

}


