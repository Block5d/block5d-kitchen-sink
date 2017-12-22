import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Fileupload } from '../shared/fileupload';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { Observable} from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  //headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
};

@Injectable()
export class FileUploadService {

  private uploadURL = `${environment.ApiUrl}/api/v1/upload`;
  private uploadURLS3 = `${environment.ApiUrl}/api/v1/upload-s3`;
  private uploadURLFireStore = `${environment.ApiUrl}/api/v1/upload-firestore`;

  private getImagesURL = `${environment.ApiUrl}/api/v1/images`;

  constructor(private httpClient: HttpClient,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig) { }

  public upload(file: any, mode: string) {
    console.log(`uploading mode > ${mode}`);
    let finalUploadUrl = this.uploadURL;
    if ( mode === 'firestore' ) {
      finalUploadUrl = this.uploadURLFireStore;
    } else if( mode === 's3' ) {
      finalUploadUrl = this.uploadURLS3;
    }
    console.log(`finalUploadUrl > ${finalUploadUrl}`);
    return this.httpClient.post(finalUploadUrl, file, httpOptions)
    .pipe(catchError(this.handleError<Fileupload>('uploadImg')))

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.addErrorToast( "Error" , error.error);
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
