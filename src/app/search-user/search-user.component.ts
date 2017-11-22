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
  
  sorts = [ { desc: "Ascending", value: "ASC"}, {desc: "Descending", value: "DESC"}];
  private users: Observable<RegistrationUser[]>;
  model = new SearchUsrCriteria('', '');

  constructor(private registrationService: RegistrationService,) { }

  getAllUsers(keyword){
    return this.registrationService.searchUsersByFullName(keyword);
  }

  ngOnInit() {
  }

  //TODO  to implement later.
  onSearch(){
     this.users = this.getAllUsers(this.model.keyword);
  }

  onChange(evt){

  }

}
