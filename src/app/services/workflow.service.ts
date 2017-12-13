import { Injectable } from '@angular/core';
import { Status,Workflow} from '../shared/workflow';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import   'rxjs/add/operator/map';
import { Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class WorkflowService {
  public workflowURL = 'http://localhost:4201/api/v1/workflows';
  //public workflowSubmitURL = 'http://localhost:4201/api/v1/workflowsSubmit';
  constructor(private httpClient:HttpClient,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig) { }

  public saveStatus(status){
    //console.log(status);
    //console.log(this.workflowURL);  
    return this.httpClient.post(this.workflowURL, status, httpOptions)
  }
  public getAllStatus(){
    return this.httpClient.get<Status[]>(this.workflowURL,httpOptions)
    .pipe(catchError(this.handleError<Status[]>('getAllStatus')))
  }
  // public saveWorkflow(workflow){
  //   console.log("1111111111111111")
  //   console.log(workflow)
  //   return this.httpClient.post(this.workflowSubmitURL,workflow,httpOptions)
  //   .pipe(catchError(this.handleError<Workflow>('workflow')))
  // }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(" why not catching ? " + error); // log to console instead
      JSON.stringify(error);
      this.addErrorToast("Error", error.error);
      return Observable.throw(error  || 'backend server error');
    }
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
