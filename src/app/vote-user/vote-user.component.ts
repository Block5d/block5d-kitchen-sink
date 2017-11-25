import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration-user.service';
import { Observable } from 'rxjs';
import { RegistrationUser } from '../shared/registration-user';
import * as _ from 'lodash';

@Component({
  selector: 'app-vote-user',
  templateUrl: './vote-user.component.html',
  styleUrls: ['./vote-user.component.css']
})

export class VoteUserComponent implements OnInit {
  private users: Observable<RegistrationUser[]>;
  randomPictures: string;
  public votedUsers = [];

  model = new RegistrationUser('','','','','',null, '', '', '', 0);
  randomImages = ['https://www.thefamouspeople.com/profiles/images/amy-adams-1.jpg', 
    'http://www.omega-level.net/wp-content/uploads/2017/10/wonder-woman-2-filming-summer-2018.jpg']
  
  constructor(private registrationService: RegistrationService) {
    this.users = this.getAllUsers()
      .do(console.log)
      .map(data => _.values(data))
   }

  ngOnInit() {
    this.randomPictures = this.randomImages[0];
  }

  getAllUsers(){
    return this.registrationService.getAllUsers(null);
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
