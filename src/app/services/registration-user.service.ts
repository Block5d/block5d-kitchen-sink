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
  
  public saveRegisteredUser(user: RegistrationUser){
    return this.httpClient.post(this.usersURL, user, httpOptions)
    .pipe(catchError(this.handleError<RegistrationUser>('saveRegisteredUser')));
  };

  public updateUser(user: RegistrationUser){
    console.log(user);
    return this.httpClient.put(this.usersURL, user, httpOptions)
     .pipe(catchError(this.handleError<RegistrationUser>('updateUser')));
  };

  public countUsers(keyword){
    return this.httpClient.get(`${this.usersURL}/count?keyword=${keyword}`, httpOptions);
  }

  public getAllUsers(model) : Observable<RegistrationUser[]> {
    var getURL = `${this.usersURL}?keyword=${model.keyword}&sortBy=${model.sortBy}&currentPerPage=${model.currentPerPage}&itemsPerPage=${model.itemsPerPage}`;
    return this.httpClient.get<RegistrationUser[]>(getURL, httpOptions)
      .pipe(catchError(this.handleError<RegistrationUser[]>('getUsers')));

  }

  public deleteUser(user) {
    console.log(user);
    let deleteParams = new HttpParams().set('_id', user._id);

    return this.httpClient.delete(this.usersURL, {params: deleteParams})

    .pipe(catchError(this.handleError<RegistrationUser>('deleteUser')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.addErrorToast("Error", JSON.stringify(error.error));
      return Observable.throw(error  || 'backend server error');
    };
  }

  addErrorToast(title, msg) {
    let toastOptions: ToastOptions = {
        title: title,
        msg: msg,
        showClose: true,
        timeout: 3500,
        theme: 'bootstrap',
        onAdd: (toast: ToastData) => {
            console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function(toast: ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    this.toastyService.error(toastOptions);
  }

  

}
