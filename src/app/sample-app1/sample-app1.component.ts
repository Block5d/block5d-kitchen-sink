import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { LdhMemberService } from '../services/ldh-member.service';
import { LdhMember } from '../shared/ldh-member';
import { Observable } from 'rxjs';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {closeOthers: true});
}
@Component({
  selector: 'app-sample-app1',
  templateUrl: './sample-app1.component.html',
  styleUrls: ['./sample-app1.component.css'],
  providers: [{ provide: AccordionConfig, useFactory : getAccordionConfig}]
})
export class SampleApp1Component implements OnInit {
  oneAtATime = true;
  ExileShow = true;
  addShow = true;
  addmember = new LdhMember('', '', '');
  private Exile: Observable<LdhMember[]>;
  constructor(private ldhService: LdhMemberService) {
    this.Exile = this.getExilemember();
   }
  getExilemember() {
    this.ldhService.getAllmember().subscribe(result => {
      this.addmember.url = '0' + (result.length + 2).toString();
  });
    return this.ldhService.getAllmember();
  }
  ngOnInit() {
  }
  onSubmit() {
    this.ldhService.addmember(this.addmember as LdhMember);
    this.addmember = new LdhMember('', '', '');
    this.Exile = this.getExilemember();
  }

}
