import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { RegistrationUser } from '../shared/registration-user';
import { Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { SearchUsrCriteria } from '../shared/search-user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class RegistrationService {
  
  private usersURL = `${environment.ApiUrl}/api/v1/users`;

  constructor(private httpClient:HttpClient, 
        private toastyService:ToastyService, 
        private toastyConfig: ToastyConfig) {

  }
  
  public saveRegisteredUser(user){
    return this.httpClient.post(this.usersURL, user, httpOptions)
      .pipe(catchError(this.handleError<RegistrationUser>('addUser')))
  };

  public updateUser(user){
    return this.httpClient.put(this.usersURL, user, httpOptions)
      .pipe(catchError(this.handleError<RegistrationUser>('updateUser')))
  };

  public searchUsersByFullName(model){
    return this.getAllUsers(`${this.usersURL}?keyword=${model.keyword}&sortBy=
    ${model.sortBy}&currentPerPage=${model.currentPerPage}&itemsPerPage=${model.itemsPerPage}`);
  }

  public searchUsersByFullNamePagination(model){
    return this.httpClient.get(`${this.usersURL}?keyword=${model.keyword}&sortBy=${model.sortBy}
      &currentPerPage=${model.currentPerPage}&itemsPerPage=${model.itemsPerPage}`, httpOptions);
  }

  public countUsers(){
    return this.httpClient.get(`${this.usersURL}/count`, httpOptions);
  }

  public getAllUsers(url){
    var getURL = this.usersURL;
    if(url){
      getURL = url;
    }
    return this.httpClient.get<RegistrationUser[]>(getURL, httpOptions)
    .pipe(catchError(this.handleError<RegistrationUser[]>('getUsers')))
  }

  public deleteUser(user){
    console.log(user);
    let deleteParams = new HttpParams().set('_id', user._id);
    return this.httpClient.delete<RegistrationUser>(this.usersURL, {params: deleteParams})
    .pipe(catchError(this.handleError<RegistrationUser>('deleteUser')))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
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
