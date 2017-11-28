import { Component, OnInit,TemplateRef } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { SelectModule} from 'ng-select';
import { AppComponent} from '../app.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IOption} from 'ng-select';
import {  ProjectGroup} from '../shared/project';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  modalRef: BsModalRef;
  model = new ProjectGroup('','',null,null,null);
  
  constructor(private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  myOptions: Array<IOption> = [
    {label: 'Belgium', value: 'BE'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Netherlands', value: 'NL'},
    {label: 'multiple',value:'true'}
];
onSubmit(){

}
// onSubmit(){
//   //console.log("on submit ... " + this.submitted);
//   console.log(this.model)
//   this.regCompany.saveRegisteredCompany(this.model as RegistrationCompany)
//   .subscribe(company => {
//     //console.log(company);
//     this.companies = this.getAllCompanies(null);
//     this.addSuccessToast('Successfully added', `Added ${this.model.company_name}`);
//   });
// }
  ngOnInit() {
  }
}
