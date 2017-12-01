import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PersonManagement } from '../shared/person-management';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PersonManagementService {

  private personURL = `${environment.ApiUrl}/api/v1/persons`;

  constructor(
    private httpClient: HttpClient,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) { }

  public savePersonSubmission(person) {
    console.log(person.contact)
    return this.httpClient.post(this.personURL, person, httpOptions)
      .pipe(catchError(this.handleError<PersonManagement>('addUser')))
  };


  public getAllUsers(url) {
    var getURL = this.personURL;
    if (url) {
      getURL = url;
    }
    return this.httpClient.get<PersonManagement[]>(getURL, httpOptions)
      .pipe(catchError(this.handleError<PersonManagement[]>('getPersons')))
  }

  public searchUsers(keyword, type) {
    return this.getAllUsers(this.personURL + '?keyword=' + keyword + '&type=' + type);
  }


  public updateUser(person) {
    console.log('service running......')
    return this.httpClient.put(this.personURL, person, httpOptions)
      .pipe(catchError(this.handleError<PersonManagement>('updateUser')))
  };


  public deleteUser(person) {
    let deleteParams = new HttpParams().set('_id', person._id);
    return this.httpClient.delete<PersonManagement>(this.personURL, { params: deleteParams })
      .pipe(catchError(this.handleError<PersonManagement>('deleteUser')))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.addErrorToast("Error", error.error);
      return Observable.throw(error || 'backend server error');
    };
  }

  addErrorToast(title, msg) {
    var toastOptions: ToastOptions = {
      title: title,
      msg: msg,
      showClose: true,
      timeout: 3500,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    this.toastyService.error(toastOptions);
  }

}
