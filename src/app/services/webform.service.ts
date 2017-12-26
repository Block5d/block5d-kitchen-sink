import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { WebForm } from'../shared/web-form'; 

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class WebformService {
  private webformURL = 'http://localhost:4201/api/v1/webforms';
  constructor(private httpClient:HttpClient) { }
  public saveWebform(webform){
    console.log(webform);
    return this.httpClient.post(this.webformURL,webform,httpOptions);
  }

}
