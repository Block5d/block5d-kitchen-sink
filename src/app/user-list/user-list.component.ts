import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration-user.service';
import { RegistrationUser } from '../shared/registration-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: Observable<RegistrationUser[]>;

  constructor(private registrationService: RegistrationService) { 
    this.users = this.getAllUsers();
    console.log(this.users);
  }

  ngOnInit() {
    // not mandatory
  }

  getAllUsers(){
    return this.registrationService.getAllUsers();
  }

}
