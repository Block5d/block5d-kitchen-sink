import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SearchUsrCriteria } from '../shared/search-user';
import { RegistrationService } from '../services/registration-user.service';
import { Observable  } from 'rxjs';
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
  private users: Observable<RegistrationUser[]>;
  
  maxSize: number = 5;
  totalItems: number = 0;
  currentPage: number = 1;
  numPages: number = 0;
  itemsPerPage: number = +environment.itemPerPage;
  model = new SearchUsrCriteria('', '', this.currentPage, this.itemsPerPage);
  constructor(private registrationService: RegistrationService,) { 
    this.searchUsers(true);
  }

  getAllUsers(keyword, sortBy){
    return this.registrationService.searchUsersByFullName(this.model);
  }

  ngOnInit() {
  }

  onSearch(){
    console.log(this.model.sortBy);
    this.searchUsers(false);
  }

  onChange(evt){
    // onChange
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.currentPage = event.page;
    this.itemsPerPage = event.itemsPerPage;
    
    
    this.users = this.registrationService.searchUsersByFullNamePagination(
        this.model, event.page, event.itemsPerPage)
        .do(console.log)
        .map(data => _.values(data));
    
    this.users.subscribe((users)=>{
      this.numPages = Math.ceil(users.length / this.itemsPerPage);
      //this.totalItems = +users.length;
    })
    
    this.registrationService.countUsers()
    .subscribe(totalCnt => {
      this.totalItems = +totalCnt;
    });
  }

  searchUsers(initial: boolean){
    console.log("searchUsers > ");
  
    this.users = this.getAllUsers(this.model.keyword, this.model.sortBy)
      .do(console.log)
      .map(data => _.values(data));
      
    this.users.distinctUntilChanged().subscribe((users)=>{
      console.log(users.length);
      if(!initial){
        this.currentPage = 1;
      }
      this.numPages = Math.ceil(users.length / this.itemsPerPage);
      console.log(this.numPages);
      //this.totalItems = +users.length;
    })
    
    this.registrationService.countUsers()
          .subscribe(totalCnt => {
            console.log(">>>>" + totalCnt);
            this.totalItems = +totalCnt;
    });
  }

}
