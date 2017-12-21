import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  // capture string of errors
  errors: Array<string> = [];
  
  dragAreaClass: string = 'dragarea';
  totalFileSizes: number = 0;
  calculateXferSize: number = 0;
  progressPct: number = 0;
  max: number = 100;
  
  @Input() storageType: number;
  @Input() fileExt: string = "JPG, GIF, PNG";

  @Input() maxFiles: number = 5; // max only 5 files
  @Input() maxSize: number = 5; //5MB
  @Input() backend: string = "localStorage";
  
  @Output() uploadStatus = new EventEmitter();
  
  constructor(private fileService: FileUploadService) { }

  ngOnInit() {
  }

  onFileChange(event){
    let files  = event.target.files;
    this.saveFiles(files);
  }

  /*
    This is a function decorator that accepts an event name as an argument. 
    When that event gets fired on the host element it calls the associated function.
  */
  @HostListener('dragover', ['$event']) onDragOver(event){
    console.log('dragover');
    this.dragAreaClass = 'droparea';
    // If this method is called, the default action of the event will not be triggered.
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event']) onDragEnter(event){
    console.log('dragenter');
    this.dragAreaClass = 'droparea';
    // If this method is called, the default action of the event will not be triggered.
    event.preventDefault();
  }

  @HostListener('dragend', ['$event']) onDragEnd(event){
    console.log('dragend');
    this.dragAreaClass = 'dragarea';
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event){
    console.log('dragleave');
    this.dragAreaClass = 'dragarea';
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) onDrop(event){
    console.log('drop');
    this.dragAreaClass = 'dragarea';
    event.preventDefault();
    event.stopPropagation();
    var files = event.dataTransfer.files;
    console.log(files);
    this.saveFiles(files);
  }

  saveFiles(files) {
    // clear errors
    this.errors = [];

    //check the file size is more than 0
    // check files are valid
    if ( files.length > 0 && (!this.isValidFiles(files))) {
      var uploadStatusJson = {
        status: false
      }
      this.uploadStatus.emit(uploadStatusJson);
      return;
    }

    if ( files.length > 0 ) {
      // js https://developer.mozilla.org/en-US/docs/Web/API/FormData
      // The FormData interface provides a way to easily 
      // construct a set of key/value pairs representing form fields and their values,
      let formData: FormData = new FormData();
      for(var j = 0; j < files.length; j++){
        formData.append("file[]", files[j], files[j].name);
        console.log(files[j].size);
        this.totalFileSizes = this.totalFileSizes + files[j].size;
      }

      this.fileService.upload(formData, this.backend)
      .subscribe(success => {
        console.log(JSON.stringify(success));
        var arr = Object.values(success);
        console.log(arr);
        var uploadStatusJson = {
          status: true,
          files: arr
        }
        this.uploadStatus.emit(uploadStatusJson);
        for (let i of arr) {
          console.log(i.size);
          this.calculateXferSize = this.calculateXferSize  + i.size;
          this.progressPct = Math.round((this.calculateXferSize / this.totalFileSizes) * 100);
          // if the maxsize == to the progress size then 100%
          console.log(this.calculateXferSize);
          console.log(this.totalFileSizes);
          console.log('>>' + this.progressPct);

          if(this.calculateXferSize === this.totalFileSizes) { 
            this.progressPct = 100;
          }
        }
      }, error => {
        var uploadStatusJson = {
          status: false
        }
        this.uploadStatus.emit(uploadStatusJson);
        this.errors.push(error.ExceptionMessage);
      });
    }
  }

  private isValidFiles(files){
    //check those files drop in is valid
    if(files.length > this.maxFiles){
      this.errors.push(`Error: At a time you can upload only ${this.maxFiles} files`);
      return;
    }
    this.isValidFileExtension(files);
    return this.errors.length === 0;
  }

  private isValidFileExtension(files){
      var extensions = (this.fileExt.split(','))
                        .map(function(x){ return x.toLocaleUpperCase().trim()});
      for(var i = 0; i < files.length; i++){
        var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
        var exists = extensions.includes(ext);
        if(!exists) {
          this.errors.push("Error (Extension): " + files[i].name);
        }
        this.isValidFileSize(files[i]);
      }
      
  }

  private isValidFileSize(file){
      var fileSizeinMB = file.size / (1024 * 1000);
      var size = Math.round(fileSizeinMB * 100) / 100;
      if(size > this.maxSize)
          this.errors.push(`Error (File Size): ${file.name} : exceed file size limit of ${this.maxSize} MB ( ${size} MB )`);
  }

}
