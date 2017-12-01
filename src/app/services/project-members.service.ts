import { Injectable } from '@angular/core';
import { ProjectMembers } from '../shared/project-members';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProjectMembersService {

  private promemsURL = `${environment.ApiUrl}/api/v1/promems`;

  constructor(
    private httpClient: HttpClient,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) { }

  public savePromem(promem) {
    return this.httpClient.post(this.promemsURL, promem, httpOptions)
      .pipe(catchError(this.handleError<ProjectMembers>('addPromem')))
  };


  public updatePromem(promem) {
    return this.httpClient.put(this.promemsURL, promem, httpOptions)
      .pipe(catchError(this.handleError<ProjectMembers>('updatePromem')))
  };

  public getAllPromems(url) {
    var getURL = this.promemsURL;
    if (url) {
      getURL = url;
    }
    return this.httpClient.get<ProjectMembers[]>(getURL, httpOptions)
      .pipe(catchError(this.handleError<ProjectMembers[]>('getPromems')))
  }

  public deletePromem(promem) {
    let deleteParams = new HttpParams().set('_id', promem._id);
    return this.httpClient.delete<ProjectMembers>(this.promemsURL, { params: deleteParams })
      .pipe(catchError(this.handleError<ProjectMembers>('deletePromem')))
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
