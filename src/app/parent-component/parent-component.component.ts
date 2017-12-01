import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../shared/registration-user';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  users = [
    {fullname: 'Kenneth Phang', dateOfBirth: new Date()},
    {fullname: 'Douglas', dateOfBirth: new Date()},
    {fullname: 'Louis', dateOfBirth: new Date()},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
