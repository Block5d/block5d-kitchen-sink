import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { RegistrationUser } from './registration-user';
import { Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class RegistrationService {
  private usersURL = 'http://localhost:4201/api/v1/users';
  constructor(private httpClient:HttpClient) {

  }

  public saveRegisteredUser(user){
    console.log(user);
    return this.httpClient.post(this.usersURL, user, httpOptions)
      .pipe(
      catchError(this.handleError<RegistrationUser>('addUser')))
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
