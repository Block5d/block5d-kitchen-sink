import { Component, OnInit } from '@angular/core';
import { AddProject } from '../shared/add-project';
import { AddProjectService } from '../services/add-project.service';
import { Observable } from 'rxjs/Observable';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  private projects: Observable<AddProject[]>;
  model = new AddProject('', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, '', '', null, null, null, '', null, null, null, null, null, null, null, '', null, null, '', '')

  constructor(
    private addProjectService: AddProjectService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) { }

  ngOnInit() {
  }

}
