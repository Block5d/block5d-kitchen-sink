import { Component, OnInit, Input } from '@angular/core';
import { RegistrationUser } from '../shared/registration-user';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() user: RegistrationUser;
  
  constructor() { }

  ngOnInit() {
  }

}
