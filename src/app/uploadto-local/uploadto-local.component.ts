import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-uploadto-local',
  templateUrl: './uploadto-local.component.html',
  styleUrls: ['./uploadto-local.component.css']
})
export class UploadtoLocalComponent implements OnInit {

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
