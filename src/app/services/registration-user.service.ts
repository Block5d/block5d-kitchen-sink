import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { RegistrationUser } from '../shared/registration-user';
import { Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class RegistrationService {
  private usersURL = 'http://localhost:4201/api/v1/users';
  constructor(private httpClient:HttpClient,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig) {

  }
  
  public saveRegisteredUser(user){
    console.log(user);
    return this.httpClient.post(this.usersURL, user, httpOptions)
      .pipe(catchError(this.handleError<RegistrationUser>('addUser')))
  };

  public updateUser(user){
    console.log(user);
    return this.httpClient.put(this.usersURL, user, httpOptions)
      .pipe(catchError(this.handleError<RegistrationUser>('updateUser')))
  };

  public searchUsersByFullName(keyword, sortBy){
    return this.getAllUsers(this.usersURL + '?keyword=' + keyword + '&sortBy=' + sortBy);
  }

  public getAllUsers(url){
    console.log(" >>>> " + url);
    var getURL = this.usersURL;
    if(url){
      getURL = url;
    }
    console.log(" <<<<< " + JSON.stringify(getURL));
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
