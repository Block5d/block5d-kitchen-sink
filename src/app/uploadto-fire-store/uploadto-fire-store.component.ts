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

  refreshImages(imagesJson) {
    console.log('time to refresh images');
    console.log(imagesJson.files);
    for (const i of imagesJson.files) {
      this.images.push(i.fileURL);
    }
  }

}
