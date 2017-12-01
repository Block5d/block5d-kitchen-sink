import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Person , Persondetail } from '../shared/org-chart';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class OrgChartService {
  private persondetailurl = 'http://localhost:4201/api/persondetail';

  constructor(private httpClient: HttpClient) { }
  getprojectid() {

  }
  getperson() {

  }
  getpersondetail() {
    return this.httpClient.get<Persondetail[]>(this.persondetailurl, httpOptions);
  }

}
