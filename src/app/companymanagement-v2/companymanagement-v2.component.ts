import { Component, OnInit ,TemplateRef,ViewEncapsulation } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegistrationCompany } from '../shared/reg-company'
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { RegCompanyService } from '../services/reg-company.service';
import { Observable } from 'rxjs/Observable';
import { SearchCompany } from '../shared/search-company';
import { FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { environment } from '../../environments/environment';
import * as _ from 'lodash';
@Component({
  selector: 'app-companymanagement-v2',
  templateUrl: './companymanagement-v2.component.html',
  styleUrls: ['./companymanagement-v2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanymanagementV2Component implements OnInit {
  private companies : Observable<RegistrationCompany[]>;
  conditions = [ { label: "Name", value: "company_name"}, 
  {label: "Reg No.", value: "company_reg_no"}, 
  {label: "Type", value: "company_type"}, 
  {label: "Country", value: "country_origin"}];
  country_origins = [ { label: "Chinese", value: "CNY"}, 
  {label: "Malaysian", value: "MY"}, 
  {label: "Singaporean", value: "SG"}, 
  {label: "Vietnam", value: "VN"}];
  company_types = [ { desc: "main_contractor_company", value: "Main Contractor Company"}, 
  {desc: "subcontractors", value: "Subcontractors"}, 
  {desc: "suppliers", value: "Suppliers"}];
  model = new RegistrationCompany('','','','','','','','','','','','','',null,null);
  
  searchcondition = new SearchCompany('', 'company_name');
  addform = false;
  editform = false;
  validateForm: FormGroup;
  constructor(private modalService: BsModalService,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig,
    private regCompany: RegCompanyService,
    private fb: FormBuilder) {
      
    this.companies =  this.getAllCompanies(null);
    }
  ngOnInit() {
    this.validateForm = this.fb.group({
      company_name: [ null , [ Validators.required ] ],
      company_reg_no: [ null, [ Validators.required ] ],
      address_1: [ null, [ Validators.required ] ],
      address_2: [ null, [ Validators.required ] ],
      address_3: [ null, [ Validators.required ] ],
      postal_code: [ null, [ Validators.required ] ],
      city: [ null, [ Validators.required ] ],
      phone_no: [ null, [ Validators.required  ] ],
      company_email: [ null, [ Validators.required ,this.emailValidator] ],
      fax_no: [ null, [ Validators.required ] ],
      country_origin: [ null, [ Validators.required ] ],
      company_type: [ null, [ Validators.required ] ],
    })
  }

  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, email: true };
    }
  };
  onChange(evt){
    // TODO ...
  }

  add = () => {
    this.addform = true;
  }
  onSubmit() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    
      console.log('点击了确定');
      console.log(this.model)
      this.regCompany.saveRegisteredCompany(this.model as RegistrationCompany)
      .subscribe(company => {
        //console.log(company);
        this.companies = this.getAllCompanies(null);
        this.addSuccessToast('Successfully added', `Added ${this.model.company_name}`);
      });
      this.validateForm.reset();
      this.addform = false;
    
      }
  cancel = (e) => {
    console.log(e);
    this.validateForm.reset();
    this.addform = false;
    
  }
  editCompany = new RegistrationCompany('','','','','','','','','','','','','',null,null);
  edit = (company) => {

    this.editCompany = company;
    this.editCompany.phone_no = company.contact.phone_no;
    this.editCompany.fax_no = company.contact.fax_no;
    this.editCompany.company_email = company.contact.company_email;
    this.editform = true;
  }
  
  editCancel = (e) => {
    console.log(e);
    this.editform = false;
  }
  onEdit(){
    console.log("Saving edit ...");
   
    this.regCompany.updateCompany(this.editCompany as RegistrationCompany)
    .subscribe(company => {
      //console.log(">>>>>" + user);
      this.companies =  this.getAllCompanies(null);
      this.addSuccessToast('Successfully updated', `Saved ${this.editCompany.company_name}`);
      this.editform = false;
    });
  }
  onSearch(){
    //console.log(this.model.sortBy);
    console.log(this.searchcondition.keyword);
    this.companies = this.getAllCompanies(this.searchcondition.keyword,this.searchcondition.condition)
  }
  onDelete(company){
    console.log(company);
    this.regCompany.deleteCompany(company as RegistrationCompany)
    .subscribe(company => {
      //console.log("DELETE >>>>>" + user);
      this.companies = this.getAllCompanies(null);
      this.addSuccessToast('Delete successfully', `Delete ${company}`);
      this.companies = this.getAllCompanies(null);
      //this.modalRef.hide();
    });
  }
  getAllCompanies(keyword:string,value:string):any;
  getAllCompanies(keyword:null,value?:string):any;
  getAllCompanies(keyword,value?:string):any{
    if (keyword == null || typeof keyword == 'undefined'){
      console.log(123);
      return  this.regCompany.getAllCompanies(null);
    }else{
      console.log(keyword);
      return this.regCompany.searchCompany(keyword,value);
    }  
    //return this.regCompany.getAllCompanies(null);
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
