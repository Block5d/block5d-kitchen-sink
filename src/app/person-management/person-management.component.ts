import { Component, OnInit, TemplateRef } from '@angular/core';
import { PersonManagement } from '../shared/person-management';
import { SearchPerson } from '../shared/person-management'
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs/Observable';
import { PersonManagementService } from '../services/person-management.service';
@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.component.html',
  styleUrls: ['./person-management.component.css']
})
export class PersonManagementComponent implements OnInit {

  private persons: Observable<PersonManagement[]>;
  private editPerson: PersonManagement;
  model = new PersonManagement('', '', '', null, '', null, '',null,'','','','', new Date(), new Date(),'','');
  smodel = new SearchPerson('', "first_name",null,null);
  modalRef: BsModalRef;
  bsValue: Date = new Date();
  isCollapsed: boolean = true;
  submitted: boolean = false;

  provider_types = [
    { desc: "Chrome", value: "Google" },
    { desc: "Firefox", value: "Firefox" },
    { desc: "Sugo", value: "Sugo" },
    { desc: "Internet Explore", value: "IE" },
    { desc: "QQ", value: "Tencent" }
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
    private modalService: BsModalService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) { }

  ngOnInit() {
  }

  add(template: TemplateRef<any>) {
    // this.model = person;
    // this.model.dateOfBirth = new Date(person.dateOfBirth);
    this.modalRef = this.modalService.show(template);
  }


  onSubmit() {
    this.personManagementService.savePerson(this.model as PersonManagement)
      .subscribe(person => {
        this.addSuccessToast('Successfully added', `Added ${this.model.first_name}`);
        this.modalRef.hide();
        this.persons = this.getAllPersons();
        this.model = new PersonManagement('', '', '', null, '', null, '',null,'','','','', new Date(), new Date(),'','');
      });
  }

  edit(person, template: TemplateRef<any>) {
    this.editPerson = person;
    this.editPerson.modified_date = new Date();
    this.editPerson.contact_no = person.contact.contact_no;
    this.editPerson.email = person.contact.email;
    this.modalRef = this.modalService.show(template);
  }

  onEdit() {
    //console.log("Saving edit ...");
    this.personManagementService.updatePerson(this.editPerson as PersonManagement)
      .subscribe(person => {
        this.addSuccessToast('Successfully updated', `Saved ${this.editPerson.first_name}`);
        this.persons = this.getAllPersons();
        this.modalRef.hide();
      });
  }

  onDelete(person) {
    this.personManagementService.deletePerson(person as PersonManagement)
      .subscribe(person => {
        this.persons = this.getAllPersons();
        this.addSuccessToast('Delete successfully', `Delete ${person.first_name}`);
        //this.modalRef.hide();
      });
  }

  getAllPersons() {
    return this.personManagementService.getAllPersons(null);
  }

  onSearch() {
    this.persons = this.getAllPersons();
  }

  onChange(evt) {

  }

  onCancel() {
    this.modalRef.hide();
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


}
