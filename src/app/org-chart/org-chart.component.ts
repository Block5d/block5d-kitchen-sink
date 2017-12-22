import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'ng-org-chart';
import { Observable } from 'rxjs/Rx';
import { OrgChartService } from '../services/org-chart.service';
import { Person, Persondetail } from '../shared/org-chart';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {
  submitperson = new Person(null, '', '');
  projectidoption = [
    { label: '2017TCAH16HSt', value: '1' },
    { label: '2017TCAH16HSK', value: '2' },
    { label: '2017TCAH16HSO', value: '3' },
    { label: '2017TCAH16HSI', value: '4' },
    { label: '2017TCAH16HSA', value: '5' }
  ];
  selectmemberoption = [
    { label: 'KENNETH PHANG', value: 'KENNETH PHANG' },
    { label: 'LANNISTER', value: 'LANNISTER' },
    { label: 'TAMMY', value: 'TAMMY' },
    { label: 'DAVID', value: 'DAVID' },
    { label: 'IVAN', value: 'IVAN' },
    { label: 'JULIE', value: 'JULIE' }
  ];
  reportingofficeroption = [
    { label: 'LEE HONG JOO', value: 'LEE HONG JOO' },
    { label: 'LANNISTER', value: 'LANNISTER' },
    { label: 'TAMMY', value: 'TAMMY' },
    { label: 'DAVID', value: 'DAVID' },
    { label: 'IVAN', value: 'IVAN' },
    { label: 'JULIE', value: 'JULIE' }
  ];
  topEmployee: IEmployee = {
    name: 'Janis Martin',
    designation: 'CEO',
    subordinates: []
  };
  private persondetail: Observable<Persondetail[]>;
  constructor(
    private orgChartservice: OrgChartService,
  ) { }

  ngOnInit() {
  }
  dosth() {
    console.log(this.submitperson);
    this.persondetail = this.orgChartservice.getpersondetail();
  }
  addsubordinates(person) {
    let sth = {name: '', designation: '', subordinates: []};
    sth.name = person;
    sth.designation = 'worker';
    return sth;
  }
  addmember() {
    let subpush = {
        name: this.submitperson.reportingofficer,
        designation: 'boss',
        subordinates: []
    };
    for (let i = 0; i < this.submitperson.selectmember.length; i++) {
        subpush.subordinates.push(this.addsubordinates(this.submitperson.selectmember[i]));
    }
    console.log(subpush);
    this.topEmployee.subordinates.push(subpush);
  }

}
