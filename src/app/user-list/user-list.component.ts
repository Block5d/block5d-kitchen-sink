import { Component, OnInit, TemplateRef } from '@angular/core';
import { RegistrationService } from '../services/registration-user.service';
import { RegistrationUser } from '../shared/registration-user';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  private users: Observable<RegistrationUser[]>;
  modalRef: BsModalRef;
  bsValue: Date = new Date();
  submitted = false;
  private editUser: RegistrationUser;
  nationalities = [ { desc: "Chinese", value: "CNY"}, {desc: "Malaysian", value: "MY"}, {desc: "Singaporean", value: "SG"}, {desc: "Vietnam", value: "VN"}];
  
  constructor(private registrationService: RegistrationService,
    private modalService: BsModalService) { 
    this.users = this.getAllUsers();
    console.log(this.users);
  }

  ngOnInit() {
    // not mandatory
  }

  getAllUsers(){
    return this.registrationService.getAllUsers();
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

  }

}
