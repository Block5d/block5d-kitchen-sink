import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProjectSubmission } from '../shared/project-submission';
import { Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProjectSubmissionService {

  private prosubsURL = `${environment.ApiUrl}/api/v1/prosubs`;

  constructor(
    private httpClient:HttpClient, 
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig
  ) { }

  public saveProjectSubmission(prosub){
    return this.httpClient.post(this.prosubsURL, prosub, httpOptions)
      .pipe(catchError(this.handleError<ProjectSubmission>('addUser')))
  };

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
