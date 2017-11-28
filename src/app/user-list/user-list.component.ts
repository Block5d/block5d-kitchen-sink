import { Component, OnInit, TemplateRef } from '@angular/core';
import { RegistrationService } from '../services/registration-user.service';
import { RegistrationUser } from '../shared/registration-user';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  private users: Observable<RegistrationUser[]>;
  //@ViewChild('encasUnPwModal') public modal: ModalDirective;
  modalRef: BsModalRef;
  bsValue: Date = new Date();
  submitted = false;
  private editUser: RegistrationUser;
  nationalities = [ { desc: "Chinese", value: "CNY"}, {desc: "Malaysian", value: "MY"}, {desc: "Singaporean", value: "SG"}, {desc: "Vietnam", value: "VN"}];
  
  constructor(private registrationService: RegistrationService,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig,
    private modalService: BsModalService) { 
    this.users = this.getAllUsers();
    console.log(this.users);
  }

  ngOnInit() {
    // not mandatory
    
  }

  getAllUsers(){
    return this.registrationService.getAllUsers(null);
  }

  edit(user, template: TemplateRef<any>) {
    console.log(user);
    this.editUser = user;
    console.log(user.dateOfBirth);
    console.log(user.nationality);
    console.log(user.gender);
    
    //this.editUser.dateOfBirth = user.dateOfBirth;

    this.editUser.dateOfBirth = new Date(user.dateOfBirth);
    console.log(this.editUser.dateOfBirth);
    console.log(this.editUser);
    this.modalRef = this.modalService.show(template);
  }

  onEdit(){
    console.log("Saving edit ...");
    this.registrationService.updateUser(this.editUser as RegistrationUser)
    .subscribe(user => {
      console.log(">>>>>" + user);
      this.addSuccessToast('Successfully updated', `Saved ${this.editUser.fullname}`);
      this.modalRef.hide();
    });
  }

  onCancel(){
    this.modalRef.hide();
  }

  onDelete(user){
    this.registrationService.deleteUser(user as RegistrationUser)
    .subscribe(user => {
      console.log("DELETE >>>>>" + user);
      this.users = this.getAllUsers();
      this.addSuccessToast('Delete successfully', `Delete ${user}`);
      //this.modalRef.hide();
    });
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
