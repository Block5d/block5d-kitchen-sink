import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SearchUsrCriteria } from '../shared/search-user';
import { RegistrationService } from '../services/registration-user.service';
import { Observable  } from 'rxjs';
import { RegistrationUser } from '../shared/registration-user';
import { environment } from '../../environments/environment';

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
    this.searchUsers();
  }

  getAllUsers(keyword, sortBy){
    return this.registrationService.searchUsersByFullName(this.model);
  }

  ngOnInit() {
  }

  onSearch(){
    console.log(this.model.sortBy);
    this.searchUsers();
  }

  onChange(evt){
    // onChange
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    console.log('this.currentPage: ' + this.currentPage);
    /*
    this.registrationService.countUsers()
      .subscribe(totalCnt => {
        this.totalItems = +totalCnt;
        console.log(this.totalItems);
        console.log(this.totalItems);
        console.log(this.itemsPerPage);
      });
    this.users = this.getAllUsers(this.model.keyword, this.model.sortBy);*/
    //return this.searchUsers();
    
    this.currentPage = event.page;
    this.itemsPerPage = event.itemsPerPage;
    
    this.registrationService.searchUsersByFullNamePagination(this.model).subscribe(result => {
      console.log("Page changed > " + JSON.stringify(result));
      console.log(result);
      //this.numPages = Math.ceil(result.length / this.itemsPerPage);
      console.log(this.numPages);
      //this.users = new Observable(result);
      //this.users = Observable.of(result);;
    });

    this.registrationService.countUsers()
    .subscribe(totalCnt => {
      this.totalItems = +totalCnt;
      console.log(this.totalItems);
      console.log(this.totalItems);
      console.log(this.itemsPerPage);
    });
  }

  searchUsers(){
    console.log("searchUsers > ");
    this.users = this.getAllUsers(this.model.keyword, this.model.sortBy);
    this.users.subscribe(result => {
      console.log(JSON.stringify(result));
      console.log(result.length);
      this.numPages = Math.ceil(result.length / this.itemsPerPage);
      console.log(this.numPages);
    });
    
    this.registrationService.countUsers()
          .subscribe(totalCnt => {
            this.totalItems = +totalCnt;
            console.log(this.totalItems);
            console.log(this.totalItems);
            console.log(this.itemsPerPage);
          });
  }

}
