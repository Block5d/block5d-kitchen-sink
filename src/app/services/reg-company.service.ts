import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import   'rxjs/add/operator/map';
import { Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { RegistrationCompany } from '../shared/reg-company';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class RegCompanyService {
  private companiesURL = 'http://localhost:4201/api/v1/companies';
  constructor(private httpClient:HttpClient,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig) { }

    public saveRegisteredCompany(company){
      console.log(company);
      return this.httpClient.post(this.companiesURL, company, httpOptions)
        .pipe(catchError(this.handleError<RegistrationCompany>('addCompany')))
    };

    public deleteCompany(company){
      //console.log(user);
      let deleteParams = new HttpParams().set('_id', company._id);
      return this.httpClient.delete<RegistrationCompany>(this.companiesURL, {params: deleteParams})
      .pipe(catchError(this.handleError<RegistrationCompany>('deleteCompany')))
    }

    public updateCompany(company){
      return this.httpClient.put(this.companiesURL,company,httpOptions)
      .pipe(catchError(this.handleError<RegistrationCompany>('updateCompany')))

    }
    public searchCompany(keyword,value){
      return this.getAllCompanies(this.companiesURL + '?keyword=' + keyword + '&value=' + value);
    }

    public getAllCompanies(url){
      console.log(" >>>> " + url);
      var getURL = this.companiesURL;
      if(url){
        getURL = url;
      }
      console.log(" <<<<< " + JSON.stringify(getURL));
      return this.httpClient.get<RegistrationCompany[]>(getURL, httpOptions)
      .pipe(catchError(this.handleError<RegistrationCompany[]>('getCompanies')))
    }
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(" why not catching ? " + error); // log to console instead
        JSON.stringify(error);
        this.addErrorToast("Error", error.error);
        return Observable.throw(error  || 'backend server error');
      };
    }
    addErrorToast(title,msg) {
      var toastOptions:ToastOptions = {
          title: title,
          msg: msg,
          showClose: true,
          timeout: 3500,
          theme: 'bootstrap',
          onAdd: (toast:ToastData) => {
              console.log('Toast ' + toast.id + ' has been added!');
          },
          onRemove: function(toast:ToastData) {
              console.log('Toast ' + toast.id + ' has been removed!');
          }
      };
      this.toastyService.error(toastOptions);
    }
}
