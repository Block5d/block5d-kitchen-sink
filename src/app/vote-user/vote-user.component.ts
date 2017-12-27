import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration-user.service';
import { Observable } from 'rxjs';
import { RegistrationUser } from '../shared/registration-user';
import * as _ from 'lodash';
import { environment } from '../../environments/environment';
import { SearchUsrCriteria } from '../shared/search-user';

@Component({
  selector: 'app-vote-user',
  templateUrl: './vote-user.component.html',
  styleUrls: ['./vote-user.component.css']
})

export class VoteUserComponent implements OnInit {
  private users: Observable<RegistrationUser[]>;
  randomPictures: string;
  public votedUsers = [];
  maxSize: number = 5;
  totalItems: number = 0;
  currentPage: number = 1;
  numPages: number = 0;
  inited: boolean = false;
  itemsPerPage: number = +environment.itemPerPage;
  showSpinner = true;

  model = new RegistrationUser('','','','','',null, '', '', '', 0);
  searchModel = new SearchUsrCriteria('', '', this.currentPage, this.itemsPerPage);
  randomImages = ['https://www.thefamouspeople.com/profiles/images/amy-adams-1.jpg', 
    'http://www.omega-level.net/wp-content/uploads/2017/10/wonder-woman-2-filming-summer-2018.jpg']
  
  constructor(private registrationService: RegistrationService) {
    this.users = this.registrationService.getAllUsers(this.searchModel);
  }

  ngOnInit() {
    this.randomPictures = this.randomImages[0];
    this.users.subscribe((x) => {
      this.showSpinner = false;
      this.totalItems = x.length;
    });
  }

  onChange(evt){
    var outcome = Math.random() * (2 - 0) + 0;
    console.log("outcome > "+ Math.ceil(outcome));
    this.randomPictures = this.randomImages[Math.ceil(outcome)-1];
  }

  onlikeItEvt(like: boolean) {
    var newLike = {
      name: this.model.voteUser,
      like: like
    }
    console.log("like ... " + like);
    this.votedUsers.push(newLike);
  }

  onDislikeEvt(dislike: boolean) {
    var newdisLike = {
      name: this.model.voteUser, 
      dislike: dislike
    }
    console.log("dislike..." + dislike);
    this.votedUsers.push(newdisLike);
  }

}
