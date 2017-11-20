import { Component } from '@angular/core';
import { RegistrationUser } from './registration-user';
import { RegistrationService } from './registration-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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
}
