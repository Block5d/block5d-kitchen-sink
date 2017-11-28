import { Component, OnInit ,TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegistrationCompany } from '../shared/reg-company'
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { RegCompanyService } from '../services/reg-company.service';
import { Observable } from 'rxjs/Observable';
import { SearchCompany } from '../shared/search-company';

@Component({
  selector: 'app-companymanagement',
  templateUrl: './companymanagement.component.html',
  styleUrls: ['./companymanagement.component.css']
})
export class CompanymanagementComponent implements OnInit {
  private companies : Observable<RegistrationCompany[]>;
  private editCompany: RegistrationCompany;
  modalRef: BsModalRef;
  submitted = false;
  conditions = [ { desc: "Name", value: "company_name"}, 
  {desc: "Reg No.", value: "company_reg_no"}, 
  {desc: "Type", value: "company_type"}, 
  {desc: "Country", value: "country_origin"}];
  country_origins = [ { desc: "Chinese", value: "CNY"}, 
  {desc: "Malaysian", value: "MY"}, 
  {desc: "Singaporean", value: "SG"}, 
  {desc: "Vietnam", value: "VN"}];
  company_types = [ { desc: "A", value: "a"}, 
  {desc: "B", value: "b"}, 
  {desc: "C", value: "c"}, 
  {desc: "D", value: "d"}];
  model = new RegistrationCompany('','','','','','','','','','','','','',null,null);
  searchcondition = new SearchCompany('', 'company_name');
 
  onSearch(){
    //console.log(this.model.sortBy);
    this.companies = this.getAllCompanies(this.searchcondition.keyword,this.searchcondition.condition);
  }
  constructor(private modalService: BsModalService,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig,
    private regCompany: RegCompanyService
  ) { 
    console.log(this.companies);
    this.companies =  this.getAllCompanies(null);
    
  }

  edit(company, template1: TemplateRef<any>) {
    // this.editCompany.phone_no = company.contact.phone_no;
  
    // this.editCompany.company_email = company.contact.company_email;
    // this.editCompany.fax_no= company.contact.fax_no;
    this.editCompany = company;
    this.editCompany.phone_no = company.contact.phone_no;
    this.editCompany.fax_no = company.contact.fax_no;
    this.editCompany.company_email = company.contact.company_email;
    console.log(company.contact.phone_no);
    console.log(company.contact.company_email);
    console.log(company.contact.fax_no);
    this.modalRef = this.modalService.show(template1);
  }
  onEdit(){
    console.log("Saving edit ...");
    this.regCompany.updateCompany(this.editCompany as RegistrationCompany)
    .subscribe(company => {
      //console.log(">>>>>" + user);
      this.companies =  this.getAllCompanies(null);
      this.addSuccessToast('Successfully updated', `Saved ${this.editCompany.company_name}`);
      this.modalRef.hide();
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



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit(){
    console.log("on submit ... " + this.submitted);
    console.log(this.model)
    this.regCompany.saveRegisteredCompany(this.model as RegistrationCompany)
    .subscribe(company => {
      //console.log(company);
      this.companies = this.getAllCompanies(null);
      this.addSuccessToast('Successfully added', `Added ${this.model.company_name}`);
    });
  }
  onDelete(company){
    console.log(company);
    this.regCompany.deleteCompany(company as RegistrationCompany)
    .subscribe(company => {
      //console.log("DELETE >>>>>" + user);
      this.companies = this.getAllCompanies(null);
      this.addSuccessToast('Delete successfully', `Delete ${company}`);
      //this.modalRef.hide();
    });
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
