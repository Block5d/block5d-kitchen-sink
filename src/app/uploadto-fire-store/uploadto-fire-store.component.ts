import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-uploadto-fire-store',
  templateUrl: './uploadto-fire-store.component.html',
  styleUrls: ['./uploadto-fire-store.component.css']
})
export class UploadtoFireStoreComponent implements OnInit {
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
