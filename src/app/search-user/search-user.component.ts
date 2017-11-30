import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SearchUsrCriteria } from '../shared/search-user';
import { RegistrationService } from '../services/registration-user.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import { RegistrationUser } from '../shared/registration-user';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchUserComponent implements OnInit {
  sorts = [ { desc: "Ascending", value: "1"}, {desc: "Descending", value: "-1"}];

  users: Observable<RegistrationUser[]>;
  result: RegistrationUser[] = [];

  maxSize: number = 5;
  totalItems: number = 0;
  currentPage: number = 1;
  numPages: number = 0;
  inited: boolean = false;
  itemsPerPage: number = +environment.itemPerPage;
  indexOnPage: number = 0;
  model = new SearchUsrCriteria('', '', this.currentPage, this.itemsPerPage);
  showSpinner = true;
  
  constructor(private registrationService: RegistrationService,) { 
      this.users = this.registrationService.getAllUsers(this.model);
  }

  ngOnInit() {
    this.users.subscribe((x) => {
      this.showSpinner = false;
      this.totalItems = x.length;
      console.log("forever subscribe ...");
      var numPages = x.length / this.itemsPerPage;
      console.log(numPages);
      if(numPages > 1){
        this.result = x.slice(this.indexOnPage, this.itemsPerPage -1);
      }else{
        this.result = x;
      }
    });
    
  }

  onSearch(){
    console.log(this.model.keyword);
    console.log(this.model.sortBy);
    this.users = this.registrationService.getAllUsers(this.model)
      .do(result=> this.totalItems = result.length)
      .map(result=> result);
    this.users.subscribe(users=> this.result = users);
  }

  onChange(evt){
    // onChange
  }

  pageChanged(event): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.model.currentPerPage = event.page;
    this.model.itemsPerPage = event.itemsPerPage;
    this.indexOnPage = event.page * (this.itemsPerPage);
    this.users = this.registrationService.getAllUsers(this.model)
      .do(result=> {
        this.totalItems = result.length;
        var numPages = result.length / this.itemsPerPage;
        console.log(numPages);
        if(numPages > 1 && this.model.currentPerPage > 1){
          console.log(result);
          
          var startIndex  = (this.indexOnPage - this.itemsPerPage);
          var endIndex = this.indexOnPage - 1;
          console.log("<<" + startIndex);
          console.log("<"+ endIndex);
          this.result = result.slice(startIndex, endIndex);
          console.log(this.result);
        }else{
          this.result = result;
        }
        return this.result;
      })
      .map(result=> result);
    this.users.subscribe();
    console.log('this.users: ' + this.users);
  }

}
