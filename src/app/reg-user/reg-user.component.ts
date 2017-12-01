import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../shared/registration-user';
import { RegistrationService } from '../services/registration-user.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

  submitted = false;
  nationalities = [ { desc: "Chinese", value: "CNY"}, {desc: "Malaysian", value: "MY"}, {desc: "Singaporean", value: "SG"}, {desc: "Vietnam", value: "VN"}];
  model = new RegistrationUser('','','','','',null, '', '', '', 0);

  constructor(
    private registrationService: RegistrationService,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig
  ){

  }
  onSubmit() {
    console.log("on submit ... " + this.submitted);
    console.log(`on submit ... ${this.submitted}`);
    console.log(this.model);
    this.registrationService.saveRegisteredUser(this.model)
      .subscribe(user => {
        console.log(user);
        this.addSuccessToast('Successfully added', `Added ${this.model.fullname}`);
      });
  }



  onChange(evt){
    // TODO ...
  }

  ngOnInit() {
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
