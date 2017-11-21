import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../shared/registration-user';
import { RegistrationService } from '../services/registration-user.service';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

  submitted = false;
  nationalities = [ { desc: "Chinese", value: "CNY"}, {desc: "Malaysian", value: "MY"}, {desc: "Singaporean", value: "SG"}, {desc: "Vietnam", value: "VN"}];
  model = new RegistrationUser('','','','','',null, '', '', '');

  constructor(
    private registrationService: RegistrationService
  ){

  }

  onSubmit() {
    console.log("on submit ... " + this.submitted);
    console.log(`on submit ... ${this.submitted}`);
    console.log(this.model);
    this.registrationService.saveRegisteredUser(this.model as RegistrationUser)
      .subscribe(user => {
        console.log(user);
      });
  }

  onChange(evt){
    // TODO ...
  }

  ngOnInit() {
  }

}
