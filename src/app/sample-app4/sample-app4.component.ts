import { Component, OnInit, TemplateRef } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { RegistrationService } from '../services/registration-user.service';
import { RegistrationUser } from '../shared/registration-user'
import { Observable } from 'rxjs/Observable';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as _ from 'lodash';



// export function getAccordionConfig(): AccordionConfig {
//   return Object.assign(new AccordionConfig(), { closeOthers: true });
// }

@Component({
  selector: 'app-sample-app4',
  templateUrl: './sample-app4.component.html',
  styleUrls: ['./sample-app4.component.css'],
  
  //providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})

export class SampleApp4Component implements OnInit {
  private users: Observable<RegistrationUser[]>;

  private editUser: RegistrationUser;
  disabled: boolean = false;
  myInterval: number = 1500;
  isCollapsed: boolean = true;
  isCollapsedAccordion: boolean = true;
  isCollapsedCarousel: boolean = true;
  bsConfig: Partial<BsDatepickerConfig>;
  minDate: Date;
  maxDate: Date;
  modalRef: BsModalRef;
  colorTheme = 'theme-greenß';

  nationalities = [
    { desc: "Chinese", value: "CNY" },
    { desc: "Malaysian", value: "MY" },
    { desc: "Singaporean", value: "SG" },
    { desc: "Vietnam", value: "VN" }
  ];


  status: any = {
    isUsed: true,
    isOpen: false
  };

  constructor(
    private registrationService: RegistrationService, 
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private modalService: BsModalService
  ) {

    this.users = this.getAllUsers();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 36500);
    this.maxDate.setDate(this.maxDate.getDate());
  }


  ngOnInit() {
  }

  getAllUsers() {
    return this.registrationService.getAllUsers(null);
  }

  edit(user, template: TemplateRef<any>) {
    this.editUser = user;
    this.editUser.dateOfBirth = new Date(user.dateOfBirth);
    this.modalRef = this.modalService.show(template);
  }

  onCancel() {
    this.modalRef.hide();
  }

  onEdit() {
    this.registrationService.updateUser(this.editUser as RegistrationUser)
      .subscribe(user => {
        this.addSuccessToast('Successfully updated', `Saved ${this.editUser.fullname}`);
        this.modalRef.hide();
      });
  }

  onChange(evt) {
    // TODO ...
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

  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.show();
    });
  }




  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
  'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
  'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
  'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
  'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
  'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
  'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
  'Zagreb', 'Zaragoza', 'Łódź'];

private value:any = {};
private _disabledV:string = '0';

private get disabledV():string {
  return this._disabledV;
}

private set disabledV(value:string) {
  this._disabledV = value;
  this.disabled = this._disabledV === '1';
}

public selected(value:any):void {
  console.log('Selected value is: ', value);
}

public removed(value:any):void {
  console.log('Removed value is: ', value);
}

public typed(value:any):void {
  console.log('New search input: ', value);
}

public refreshValue(value:any):void {
  this.value = value;
}

}
