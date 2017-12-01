import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { LdhMember } from '../shared/ldh-member';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LdhMemberService {

  private ldhurl = 'http://localhost:4201/api/ldh';
  constructor(private httpClient: HttpClient) { }
  getAllmember() {
    return this.httpClient.get<LdhMember[]>(this.ldhurl, httpOptions);
  }
  addmember(member) {
    console.log(member);
    console.log(this.ldhurl);
    console.log(httpOptions);
    this.httpClient.post(this.ldhurl, member, httpOptions);
  }
}
