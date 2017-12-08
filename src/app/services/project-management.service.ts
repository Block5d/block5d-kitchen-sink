import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProjectManagement } from '../shared/project-management';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectManagementService {

  private projectsURL = `${environment.ApiUrl}/api/v1/projects`;

  constructor(
    private httpClient: HttpClient,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) { }

  public saveProject(project) {
    return this.httpClient.post(this.projectsURL, project, httpOptions)
      .pipe(catchError(this.handleError<ProjectManagement>('addProject')))
  };


  public updateProject(project){
    return this.httpClient.put(this.projectsURL, project, httpOptions)
      .pipe(catchError(this.handleError<ProjectManagement>('updateProject')))
  };

  public searchProjects(keyword, type){
    return this.getAllProjects(this.projectsURL + '?keyword=' + keyword + '&type=' + type);
  }

  // public getAllProjects(url){
  //   var getURL = this.projectsURL;
  //   if(url){
  //     getURL = url;
  //   }
  //   return this.httpClient.get<ProjectManagement[]>(getURL, httpOptions)
  //   .pipe(catchError(this.handleError<ProjectManagement[]>('getProjects')))
  // }

  public getAllProjects(smodel) : Observable<ProjectManagement[]> {
    var getURL = `${this.projectsURL}?keyword=${smodel.keyword}&type=${smodel.type}&currentPerPage=${smodel.currentPerPage}&itemsPerPage=${smodel.itemsPerPage}`;
    console.log(getURL);
    return this.httpClient.get<ProjectManagement[]>(getURL, httpOptions)
      .pipe(catchError(this.handleError<ProjectManagement[]>('getProjects')));

  }

  public deleteProject(project){
    let deleteParams = new HttpParams().set('_id', project._id);
    return this.httpClient.delete<ProjectManagement>(this.projectsURL, {params: deleteParams})
    .pipe(catchError(this.handleError<ProjectManagement>('deleteProject')))
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
