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

  public savePerson(person) {
    console.log(person.contact)
    return this.httpClient.post(this.personURL, person, httpOptions)
      .pipe(catchError(this.handleError<PersonManagement>('addPerson')))
  };

  public getAllPersons(smodel) : Observable<PersonManagement[]> {
    var getURL = `${this.personURL}?keyword=${smodel.keyword}&type=${smodel.type}&currentPerPage=${smodel.currentPerPage}&itemsPerPage=${smodel.itemsPerPage}`;
    console.log(getURL);
    return this.httpClient.get<PersonManagement[]>(getURL, httpOptions)
      .pipe(catchError(this.handleError<PersonManagement[]>('getPersons')));

  }

  public updatePerson(person) {
    console.log('service running......')
    return this.httpClient.put(this.personURL, person, httpOptions)
      .pipe(catchError(this.handleError<PersonManagement>('updatePerson')))
  };


  public deletePerson(person) {
    let deleteParams = new HttpParams().set('_id', person._id);
    return this.httpClient.delete<PersonManagement>(this.personURL, { params: deleteParams })
      .pipe(catchError(this.handleError<PersonManagement>('deletePerson')))
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
