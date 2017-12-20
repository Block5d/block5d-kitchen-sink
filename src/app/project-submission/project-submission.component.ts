import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProjectSubmission } from '../shared/project-submission';
import { ProjectManagement } from '../shared/project-management';
import { ProjectSubmissionService } from '../services/project-submission.service';
import { ProjectManagementService } from '../services/project-management.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-project-submission',
  templateUrl: './project-submission.component.html',
  styleUrls: ['./project-submission.component.css']
})
export class ProjectSubmissionComponent implements OnInit {

  private projects: Observable<ProjectManagement[]>;
  showProject: ProjectManagement;
  model = new ProjectSubmission('', '', '', null, null, null, '', '', null, null);
  projectSubmissionValidateForm: FormGroup;

  authorities = [{ desc: "Have one", value: "Man" },
  { desc: "Have zero", value: "Woman" },
  { desc: "Have Nothing", value: "Else" }
  ];

  types = [{ desc: "Building", value: "Building" },
  { desc: "Renovation", value: "Renovation" },
  { desc: "Soil Stabilization", value: "Soil Stabilization" }
  ];

  statuses = [{ desc: "Pending", value: "pending" },
  { desc: "Complete", value: "complete" }
  ];


  constructor(
    private projectSubmissionService: ProjectSubmissionService,
    private projectManagementService: ProjectManagementService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private fb: FormBuilder
  ) {
    this.projects = this.projectManagementService.getAllProjects(this.model);
  }

  onSubmit() {
    this.model.project_id = this.showProject._id;
    this.projectSubmissionService.saveProjectSubmission(this.model as ProjectSubmission)
      .subscribe(user => {
        this.addSuccessToast('Successfully added', `Added ${this.model.project_id}`);
      });
  }

  addSuccessToast(title, msg) {
    var toastOptions: ToastOptions = {
      title: title,
      msg: msg,
      showClose: true,
      timeout: 1500,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    this.toastyService.success(toastOptions);
  }

  secondSubmissionDayValidator = (control: FormControl): any => {
    if (new Date(control.value) < new Date(this.model.first_submission_date)) {
      return { expired: true, error: true }
    }
  };

  ngOnInit() {

    this.projectSubmissionValidateForm = this.fb.group({
      project_id: ['', [Validators.required]],
      description: ['', [Validators.required]],
      authority: ['', [Validators.required]],
      planned_submission_date: [null, [Validators.required]],
      first_submission_date: [null, [Validators.required]],
      second_submission_date: [null, [this.secondSubmissionDayValidator]],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });

  }

}
