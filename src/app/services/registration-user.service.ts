import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { RegistrationUser } from '../shared/registration-user';
import { Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class RegistrationService {
  private usersURL = 'http://localhost:4201/api/v1/users';
  constructor(private httpClient:HttpClient) {

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


  public getAllUsers(){
    return this.httpClient.get<RegistrationUser[]>(this.usersURL, httpOptions)
    .pipe(catchError(this.handleError<RegistrationUser[]>('getUsers')))
  }
  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(" why not catching ? " + error); // log to console instead
      JSON.stringify(error);
      return of(result as T);
    };
  }
}
