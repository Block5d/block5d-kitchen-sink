import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { RegistrationService } from '../services/registration-user.service';
import { RegistrationUser } from '../shared/registration-user'
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-sample-app4',
  templateUrl: './sample-app4.component.html',
  styleUrls: ['./sample-app4.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class SampleApp4Component implements OnInit {
  private users: Observable<RegistrationUser[]>;

  constructor(
    private registrationService:RegistrationService
  ) {
    this.users = this.getAllUsers()
      .do(console.log)
      .map(data => _.values(data))
   }

  ngOnInit() {
  }

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  // oneAtATime: boolean = true;
  dismissible = true;
  disabled: boolean = false;
  myInterval:number = 1500;
  isCollapsed: boolean = true;
  isCollapsedAlerts:boolean = true;
  isCollapsedAccordion:boolean = true;
  isCollapsedCarousel:boolean = true;

  status: any = {
    isFirstOpen: true,
    isOpen: false
  };
  // status: any = {
  //   isFirstOpen: true,
  //   isFirstDisabled: false
  // };

  groups: any[] = [
    {
      title: 'Mysterious Man',
      content: '{{uesr.email}}'
    },
    {
      title: 'Mysterious Woman',
      content: '5a14fb966f79890e5facd429'
    }
  ];

  addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

  // log(event: boolean) {
  //   console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  // }

  index = 0;
  alerts = [
    {
      type: 'success',
      msg: ['You successfully read this important alert message.',
      'Now this text is different from what it was before. Go ahead and click the button one more time',
      'Well done! Click reset button and you\'ll see the first message']
    },
    {
      type: 'info',
      msg: ['You successfully read this important alert message.',
      'Now this text is different from what it was before. Go ahead and click the button one more time',
      'Well done! Click reset button and you\'ll see the first message']
    },
    {
      type: 'danger',
      msg: ['You successfully read this important alert message.',
      'Now this text is different from what it was before. Go ahead and click the button one more time',
      'Well done! Click reset button and you\'ll see the first message']
    }
  ];
 
  changeText() {
    if (this.alerts.length - 1 !== this.index) {
      this.index++;
    }
  }

  reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }

  getAllUsers(){
    return this.registrationService.getAllUsers(null);
  }
  

}
