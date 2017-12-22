import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-uploadto-s3',
  templateUrl: './uploadto-s3.component.html',
  styleUrls: ['./uploadto-s3.component.css']
})
export class UploadtoS3Component implements OnInit {

  public images = [];
  constructor() { }

  ngOnInit() {

  }

  refreshImages(imagesJson){
    console.log("time to refresh images");
    console.log(imagesJson.files);
    for (let i of imagesJson.files) {
      console.log(`${environment.ApiUrl}/static/${i.filename}`);
      this.images.push(`${environment.ApiUrl}/static/${i.filename}`);
    }
    console.log(">>>" + this.images);
    
  }

}
