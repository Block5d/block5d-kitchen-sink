import { Injectable } from '@angular/core';
import { Status,Workflow } from '../shared/workflow';
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
export class WorkflowSubmitService {
  public workflowSubmitURL = 'http://localhost:4201/api/v1/workflowsSubmit';
  constructor(private httpClient:HttpClient,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig) { }

  public saveWorkflow(workflow){
    console.log("1111111111111111")
    console.log(workflow)
    return this.httpClient.post(this.workflowSubmitURL,workflow,httpOptions)
    //.pipe(catchError(this.handleError<Workflow>('workflow')))
  }
}
