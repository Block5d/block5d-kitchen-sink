import { Component, OnInit, TemplateRef } from '@angular/core';
import { IOption } from 'ng-select';
import { ProjectMembers } from '../shared/project-members';
import { ProjectMembersService } from '../services/project-members.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs/Observable';
import { ProjectManagement } from '../shared/project-management';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']
})
export class ProjectMembersComponent implements OnInit {

  model = new ProjectMembers('', '', '', true, new Date(), new Date(), '', '');
  private promems: Observable<ProjectMembers[]>;
  private editPromem: ProjectMembers;
  //checkModel:FormGroup;
  //checkModel:any = {isEnabled:true };
  modalRef: BsModalRef;

  project_ids: Array<IOption> = [{ label: "1", value: "id1" },
  { label: "2", value: "id2" }, { label: "3", value: "id3" },
  { label: "4", value: "id4" }, { label: "5", value: "id5" }];

  person_ids: Array<IOption> = [{ label: "moron", value: "u" },
  { label: "idiot", value: "r" }, { label: "nerd", value: "m" },
  { label: "bastard", value: "r" }, { label: "bitch", value: "m" },
  { label: "silly", value: "o" }, { label: "asshole", value: "o" }]

  constructor(
    private projectMembersService: ProjectMembersService,
    private modalService: BsModalService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.promems = this.getAllPromems();
  }

  ngOnInit() {

  }

  getAllPromems() {
    return this.projectMembersService.getAllPromems(null);
  }

  onSubmit() {
    this.projectMembersService.savePromem(this.model as ProjectMembers)
      .subscribe(promem => {
        this.addSuccessToast('Successfully added', `Added ${this.model.person_id}`);
        this.promems = this.getAllPromems();
        this.model = new ProjectMembers('', '', '', true, new Date(), new Date(), '', '');
      });
  }

  onEdit() {
    this.projectMembersService.updatePromem(this.editPromem as ProjectMembers)
      .subscribe(promem => {
        this.addSuccessToast('Successfully updated', `Saved ${this.editPromem.person_id}`);
        this.promems = this.getAllPromems();
        this.modalRef.hide();
      });
  }

  edit(promem, template: TemplateRef<any>) {
    this.editPromem = promem;
    this.editPromem.modified_date = new Date();
    this.modalRef = this.modalService.show(template);
  }

  onDelete(promem) {
    this.projectMembersService.deletePromem(promem as ProjectMembers)
      .subscribe(promem => {
        this.promems = this.getAllPromems();
        this.addSuccessToast('Delete successfully', `Delete ${promem.person_id}`);
      });
  }

  onEnable(promem) {

    this.editPromem = promem;
    this.editPromem.isEnabled = !this.editPromem.isEnabled;
    //this.editPromem.isEnabled = this.checkModel.isEnabled
    this.projectMembersService.updatePromem(this.editPromem as ProjectMembers)
      .subscribe(promem => {
        this.promems = this.getAllPromems();
        this.addSuccessToast('Update successfully', `Update done`);
      });
  }

  onChange(evt) {
    //TO DO STH.
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

}
