import { Component, OnInit, TemplateRef } from '@angular/core';
import { RegistrationService } from '../services/registration-user.service';
import { RegistrationUser } from '../shared/registration-user';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import * as _ from 'lodash';
import { SearchUsrCriteria } from '../shared/search-user';
import { environment } from '../../environments/environment';

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
  maxSize: number = 5;
  totalItems: number = 0;
  currentPage: number = 1;
  numPages: number = 0;
  inited: boolean = false;
  itemsPerPage: number = +environment.itemPerPage;
  nationalities = [ { desc: "Chinese", value: "CNY"}, {desc: "Malaysian", value: "MY"}, {desc: "Singaporean", value: "SG"}, {desc: "Vietnam", value: "VN"}];
  model = new SearchUsrCriteria('', '', this.currentPage, this.itemsPerPage);
  showSpinner = true;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
  };

  constructor(private registrationService: RegistrationService,

    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private modalService: BsModalService) {
      this.users = this.registrationService.getAllUsers(this.model);
    }

  ngOnInit() {
    this.users.subscribe((x) => {
      this.showSpinner = false;
      this.totalItems = x.length;
    });

  }

  edit(user, template: TemplateRef<any>) {
    console.log(user);
    this.editUser = user;
    console.log(user.dateOfBirth);
    console.log(user.nationality);
    console.log(user.gender);
    this.editUser.dateOfBirth = new Date(user.dateOfBirth);
    console.log(this.editUser.dateOfBirth);
    console.log(this.editUser);
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, { class: 'gray modal-lg' }));
  }

  onEdit() {
    console.log('Saving edit');
    this.registrationService.updateUser(this.editUser as RegistrationUser).subscribe((user) => user);
    this.addSuccessToast('Successfully updated', `Saved ${this.editUser.fullname}`);
    this.modalRef.hide();
  }

  onCancel() {
    this.modalRef.hide();
  }

  onDelete(user) {
    this.registrationService.deleteUser(user as RegistrationUser).subscribe(( user ) => user);
    this.users = this.registrationService.getAllUsers(this.model);
    this.addSuccessToast('Delete successfully', `Delete ${user.fullname}`);
  }

  addSuccessToast(title, msg) {
    let toastOptions: ToastOptions = {
        title: title,
        msg: msg,
        showClose: true,
        timeout: 3000,
        theme: 'bootstrap',
        onAdd: (toast:ToastData) => {
            console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function(toast: ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    this.toastyService.success(toastOptions);
  }
}
