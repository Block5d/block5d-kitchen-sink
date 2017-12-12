import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { AddCodeMana, AddCategory } from '../shared/code-mana';
import { catchError } from 'rxjs/operators/catchError';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CodeManaService {
  private addcodeurl = 'http://localhost:4201/api/codemana';
  private addcategroy = 'http://localhost:4201/api/category';
  constructor(private httpClient: HttpClient,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig) { }
  searchcategory(option) {
    if (option === null || option.keyword === '') {
      return this.httpClient.get<AddCodeMana[]>(this.addcodeurl, httpOptions);
    }else {
      let url = `${this.addcodeurl}?keywork=${option.keyword}&type=${option.type}`;
      console.log(url);
      return this.httpClient.get<AddCodeMana[]>(url, httpOptions);
    }
  }
  getcategroy() {
    return this.httpClient.get<AddCategory[]>(this.addcategroy, httpOptions);
  }
  addcode(code) {
    return this.httpClient.post(this.addcodeurl, code, httpOptions)
      .pipe(catchError(this.handleError<AddCodeMana>('post')));
  }
  addcategory(category) {
    return this.httpClient.post(this.addcategroy, category, httpOptions);
  }
  deletecode(code) {
    let deleteParms = new HttpParams().set('_id', code._id);
    return this.httpClient.delete(this.addcodeurl, {params: deleteParms});
  }
  updatecode(code) {
    console.log(code);
    return this.httpClient.put(this.addcodeurl, code, httpOptions);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      JSON.stringify(error);
      this.addErrorToast('Error', error.error);
      return Observable.throw(error  || 'backend server error');
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
        onRemove: function(toast: ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    this.toastyService.error(toastOptions);
  }


}
