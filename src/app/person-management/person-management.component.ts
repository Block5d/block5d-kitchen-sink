import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchPerson } from '../shared/person-management';
import { PersonManagement } from '../shared/person-management';
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

@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.component.html',
  styleUrls: ['./person-management.component.css']
})
export class PersonManagementComponent implements OnInit {

  
  private persons: Observable<PersonManagement[]>;
  result: PersonManagement[] = [];
  inputValue: string;
  model = new PersonManagement('', '', '', null, '', null, '', null, '', '', '', '', new Date(), new Date(), '', '');
  editPerson = new PersonManagement('', '', '', null, '', null, '', null, '', '', '', '', new Date(), new Date(), '', '');
  editPersonModal = false; addPersonModal = false;
  maxSize: number = 5;
  totalItems: number = 0;
  currentPage: number = 1;
  numPages: number = 0;
  inited: boolean = false;
  itemsPerPage: number = +environment.itemPerPage;
  indexOnPage: number = 0;
  showSpinner = true;
  smodel = new SearchPerson('', "first_name", this.currentPage, this.itemsPerPage);
  addPersonValidateForm: FormGroup;
  editValidateForm: FormGroup;

  types = [
    { value: 'first_name', label: 'First Name' },
    { value: 'last_name', label: 'Last Name' },
    { value: 'email', label: 'Email' }
  ];

  provider_types = [
    { desc: "Project Manager", value: "project_manager_person" },
    { desc: "Architect", value: "architect_person" },
    { desc: "Design Architect", value: "design_architect_person" },
    { desc: "Quantity Surveyor", value: "quantity_surveyor_person" },
    { desc: "Consultant Engineer", value: "cs_engineer_person" },
    { desc: "Service Engineer", value: "service_engineer_person" }
  ];

  genders = [
    { desc: "Male", value: "male" }, { desc: "Female", value: "female" }
  ];

  cities = [
    { desc: "Shanghai", value: "SH" },
    { desc: "ChongQing", value: "CQ" },
    { desc: "SiChuan", value: "SC" },
    { desc: "JiangSu", value: "JS" },
    { desc: "BeiJing", value: "BJ" }
  ];

  constructor(
    private personManagementService: PersonManagementService,
    private fb: FormBuilder,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.persons = this.personManagementService.getAllPersons(this.model);
  }

  openModal(template) {
    this.addPersonModal = true;
  }

  closeModal(template) {
    switch (template) {
      case 'editPersonModal':
        this.editPersonModal = false; break;
      case 'addPersonModal':
        this.persons = this.personManagementService.getAllPersons(this.model);
        this.addPersonModal = false; break;
    }
  }

  edit(person) {
    this.editPerson = person;
    this.editPerson.modified_date = new Date();
    this.editPerson.contact_no = person.contact.contact_no;
    this.editPerson.email = person.contact.email;
    this.editPersonModal = true;
  }

  onEdit() {
    //console.log("Saving edit ...");
    this.personManagementService.updatePerson(this.editPerson as PersonManagement)
      .subscribe(person => {
        this.addSuccessToast('Successfully updated', `Saved ${this.editPerson.first_name}`);
        this.persons = this.personManagementService.getAllPersons(this.model);
        this.editPersonModal = false;
      });
  }

  onSubmit() {
    //console.log(this.model.subcontractors)
    this.personManagementService.savePerson(this.model as PersonManagement)
      .subscribe(person => {
        this.addSuccessToast('Successfully added', `Added ${this.model.first_name}`);
        this.persons = this.personManagementService.getAllPersons(this.model);
        //this.model = new PersonManagement('', '', '', null, '', null, '', null, '', '', '', '', new Date(), new Date(), '', '');
        this.addPersonModal = false;
      });
  }

  onDelete(person) {
    this.personManagementService.deletePerson(person as PersonManagement)
      .subscribe(person => {
        this.persons = this.personManagementService.getAllPersons(this.model);
        this.addSuccessToast('Delete successfully', `Delete ${person.first_name}`);
      });
  }

  onSearch() {
    console.log(this.smodel.keyword);
    console.log(this.smodel.type);
    this.persons = this.personManagementService.getAllPersons(this.smodel)
      .do(result => this.totalItems = result.length)
      .map(result => result);
    this.persons.subscribe(persons => this.result = persons);
  }

  pageChanged(event): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.smodel.currentPerPage = event.page;
    this.smodel.itemsPerPage = event.itemsPerPage;
    this.indexOnPage = event.page * (this.itemsPerPage);
    this.persons = this.personManagementService.getAllPersons(this.model)
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
    this.persons.subscribe();
  }

  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, email: true };
    }
  };

  birthDayValidator = (control: FormControl): any => {
    if (new Date(control.value) > new Date()) {
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
    this.persons.subscribe((x) => {
      this.showSpinner = false;
      this.totalItems = x.length;
      console.log('forever subscribe ...');
      this.result = x.slice(this.indexOnPage, this.itemsPerPage);
    });

    this.addPersonValidateForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      contact_no: [null, [Validators.required]],
      email: ['', [this.emailValidator]],
      dateOfBirth: [null, [this.birthDayValidator]],
      gender: ['', [Validators.required]],
      postal_code: [null, [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      provider_type: ['', [Validators.required]],
    });

    this.editValidateForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      contact_no: [null, [Validators.required]],
      email: ['', [this.emailValidator]],
      postal_code: [null, [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });

  }
}