import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import   'rxjs/add/operator/map';
import { Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { UserGroup } from '../shared/user-group';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserGroupService {
  private userGroupURL = 'http://localhost:4201/api/v1/userGroups';
  constructor(private httpClient:HttpClient,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig) { }

    public saveUserGroup(group){
      console.log(group);
      return this.httpClient.post(this.userGroupURL, group, httpOptions)
        .pipe(catchError(this.handleError<UserGroup>('addGroup')))
    };
    getAllGroups(url){
      var getURL = this.userGroupURL;
      if(url){
        getURL = url ;
      }
      return this.httpClient.get<UserGroup[]>(getURL,httpOptions)
      .pipe(catchError(this.handleError<UserGroup[]>('getGroups')))
    }
    public deleteUserGroup(group){
      let deleteParams = new HttpParams().set('_id',group._id);
      return this.httpClient.delete<UserGroup>(this.userGroupURL, {params: deleteParams})
      .pipe(catchError(this.handleError<UserGroup>('deleteGroup')))
    }
    public searchGroup(keyword,value){
      return this.getAllGroups(this.userGroupURL + '?keyword=' + keyword + '&value=' + value);
    }
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(" why not catching ? " + error); // log to console instead
        JSON.stringify(error);
        this.addErrorToast("Error", error.error);
        return Observable.throw(error  || 'backend server error');
      };
    }
    public updateUserGroup(group){
      return this.httpClient.put(this.userGroupURL,group,httpOptions)
      .pipe(catchError(this.handleError<UserGroup>('updateUserGroup')))
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
