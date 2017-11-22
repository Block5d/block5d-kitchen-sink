import { Component, OnInit } from '@angular/core';
import { SearchUsrCriteria } from '../shared/search-user';
import { RegistrationService } from '../services/registration-user.service';
import { Observable } from 'rxjs';
import { RegistrationUser } from '../shared/registration-user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  
  sorts = [ { desc: "Ascending", value: "1"}, {desc: "Descending", value: "-1"}];
  private users: Observable<RegistrationUser[]>;
  model = new SearchUsrCriteria('', '');

  constructor(private registrationService: RegistrationService,) { }

  getAllUsers(keyword, sortBy){
    return this.registrationService.searchUsersByFullName(keyword, sortBy);
  }

  ngOnInit() {
  }

  //TODO  to implement later.
  onSearch(){
    console.log(this.model.sortBy);
    this.users = this.getAllUsers(this.model.keyword, this.model.sortBy);
  }

  onChange(evt){

  }

}
