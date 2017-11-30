import { Component, OnInit } from '@angular/core';
import { ProjectSubmission } from '../shared/project-submission';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { ProjectSubmissionService } from '../services/project-submission.service';
@Component({
  selector: 'app-project-submission',
  templateUrl: './project-submission.component.html',
  styleUrls: ['./project-submission.component.css']
})
export class ProjectSubmissionComponent implements OnInit {

  submitted = false;
  model = new ProjectSubmission('','','',null,null,null, '', '',null,null);

  authorities = [{ desc: "penis", value: "Man" },
  { desc: "pussy", value: "Woman" },
  { desc: "nothing", value: "Else" }
  ];

  project_ids = [{ desc: "Sheep", value: "Aries" },
  { desc: "Moo", value: "Taurus" },
  { desc: "Double", value: "Gemini" },
  { desc: "Crab", value: "Cancer" },
  { desc: "Lion", value: "Leo" },
  { desc: "Virgin", value: "Virgo" },
  { desc: "Scales", value: "Libra" },
  { desc: "HYD", value: "Scorpio" },
  { desc: "Arrows", value: "Sagittarius" },
  { desc: "Cap", value: "Capricorn" },
  { desc: "Bottle", value: "Aquarius" },
  { desc: "Fish", value: "Pisces" }
  ];

  types = [{ desc: "Chinese", value: "CNY" },
  { desc: "American", value: "USD" },
  { desc: "Singaporean", value: "SG" },
  { desc: "Australians", value: "AD" }
  ];

  statuses = [{ desc: "apple", value: "a" },
  { desc: "orange", value: "o" },
  { desc: "watermelon", value: "w" },
  { desc: "banana", value: "b" },
  { desc: "pear", value: "p" },
  { desc: "kiwi", value: "k" }
  ];

  constructor(
    private projectSubbmissionService:ProjectSubmissionService,
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.projectSubbmissionService.saveProjectSubmission(this.model as ProjectSubmission)
      .subscribe(user => {
        this.addSuccessToast('Successfully added', `Added ${this.model.description}`);
      });
  }

  onChange(evt){
    //TODO sth.
  }


  addSuccessToast(title,msg) {
    var toastOptions:ToastOptions = {
        title: title,
        msg: msg,
        showClose: true,
        timeout: 1500,
        theme: 'bootstrap',
        onAdd: (toast:ToastData) => {
            console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function(toast:ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    this.toastyService.success(toastOptions);
  }

}
