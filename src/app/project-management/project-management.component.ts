import { Component, OnInit, TemplateRef } from '@angular/core';
import { SearchProject } from '../shared/project-management';
import { ProjectManagement } from '../shared/project-management';
import { ProjectManagementService } from '../services/project-management.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs/Observable';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { IOption } from 'ng-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {

  private editProject: ProjectManagement;
  private projects: Observable<ProjectManagement[]>;
  modalRef: BsModalRef;
  minDate: Date;
  submitted = false;
  isopen = false;
  inputValue: string;
  model = new ProjectManagement(null, '', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
  types = [];
  selectedTypes;
  smodel = new SearchProject('', "name",null, null);
  validateForm: FormGroup;


  client_companies = [{ desc: "Blizzard", value: "blz" },
  { desc: "Tencent", value: "QQ" }, { desc: "LemoTech", value: "Lemo" },
  { desc: "Nimbus Financial", value: "NF" }, { desc: "Zonesle", value: "Xuulun" }];

  project_manager_persons = [{ desc: "Douglas", value: "swm" },
  { desc: "Louis", value: "hwy" }, { desc: "Mr.Moo", value: "hjc" },
  { desc: "Jerry", value: "xjy" }, { desc: "ChanJo", value: "zsl" }];

  architect_persons = [{ desc: "ZhangJie", value: "zj" },
  { desc: "XieNa", value: "xn" }, { desc: "HuYanBin", value: "hyb" },
  { desc: "WuBai", value: "wb" }, { desc: "WuYueTian", value: "mayday" }];

  design_architect_persons = [{ desc: "Xtina", value: "CA" },
  { desc: "Adam Lambert", value: "AL" }, { desc: "Ariana Grande", value: "AG" },
  { desc: "Beyonce", value: "elephant" }, { desc: "Bruno Mars", value: "mars" }];

  quantity_surveyor_persons = [{ desc: "Math", value: "ma" },
  { desc: "Language", value: "any" }, { desc: "Fly", value: "fff" },
  { desc: "Dating", value: "girl" }, { desc: "Study", value: "ing" }];

  cs_engineer_persons = [{ desc: "Warrior", value: "zs" },
  { desc: "Mage", value: "fs" }, { desc: "Priest", value: "ms" },
  { desc: "Paladin", value: "qs" }, { desc: "DeathKnight", value: "dk" }];

  service_engineer_persons = [{ desc: "Worlock", value: "ss" },
  { desc: "Hunter", value: "lr" }, { desc: "Shaman", value: "sm" },
  { desc: "Monk", value: "ws" }, { desc: "Rouge", value: "dz" }];

  main_contractor_companies = [{ desc: "Survival", value: "sc" },
  { desc: "Beast", value: "ys" }, { desc: "Shoooot", value: "sj" },
  { desc: "Shadow", value: "am" }, { desc: "Holy", value: "sm" }];

  subcontractorses: Array<IOption> = [{ label: "Hude", value: "hd" },
  { label: "Yanzhan", value: "yz" }, { label: "Yilishabai", value: "ylsb" },
  { label: "Zhunuo", value: "zn" }, { label: "Beierfasite", value: "befst" }];

  supplierses: Array<IOption> = [{ label: "Weiershi", value: "wes" },
  { label: "Qiye", value: "qy" }, { label: "Chicheng", value: "cc" },
  { label: "Jiahe", value: "jh" }, { label: "Guanghui", value: "gh" }];

  project_countries = [{ desc: "America", value: "us" },
  { desc: "China", value: "ch" }, { desc: "Singapore", value: "sg" },
  { desc: "English", value: "ed" }, { desc: "Janpan", value: "jan" }];

  contract_currencies = [{ desc: "CNY", value: "c" },
  { desc: "USD", value: "u" }, { desc: "SGD", value: "s" },
  { desc: "ED", value: "e" }, { desc: "VG", value: "v" }];


  constructor(
    private projectManagementService: ProjectManagementService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private nzmodalService: NzModalService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
  }



  onSearch() {
    this.projects = this.getAllProjects(this.smodel.keyword, this.smodel.type);
  }
  

  getAll() {
    return this.projectManagementService.getAllProjects(null);
  }

  getAllProjects(keyword, type) {
    return this.projectManagementService.searchProjects(keyword, type);
  }

  add(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  edit(project, template: TemplateRef<any>) {
    this.editProject = project;
    this.editProject.modified_date = new Date();
    this.editProject.start_date = new Date(project.start_date);
    this.editProject.end_date = new Date(project.end_date);
    this.editProject.client_company = project.project_members.client_company;
    this.editProject.project_manager_person = project.project_members.project_manager_person;
    this.editProject.architect_person = project.project_members.architect_person;
    this.editProject.design_architect_person = project.project_members.design_architect_person;
    this.editProject.quantity_surveyor_person = project.project_members.quantity_surveyor_person;
    this.editProject.cs_engineer_person = project.project_members.cs_engineer_person;
    this.editProject.service_engineer_person = project.project_members.service_engineer_person;
    this.editProject.main_contractor_company = project.project_members.main_contractor_company;
    this.editProject.subcontractors = project.project_members.subcontractors;
    this.editProject.suppliers = project.project_members.suppliers;
    this.editProject.contact_no = project.contacts.contact_no;
    this.editProject.company_email = project.contacts.company_email;
    this.editProject.fax_no = project.contacts.fax_no;
    this.editProject.site_possession = project.project_progress.site_possession;
    this.editProject.completion_date = new Date(project.project_progress.completion_date);
    this.editProject.contract_currency = project.project_progress.contract_currency;
    this.editProject.contract_sum = project.project_progress.contract_sum;
    this.editProject.contract_duration_base = new Date(project.project_progress.contract_duration_base);
    this.editProject.contract_duration_remaining = new Date(project.project_progress.contract_duration_remaining);
    this.editProject.pct_work_done = project.project_progress.pct_work_done;
    this.editProject.remarks = project.project_progress.remarks;
    this.editProject.site_issues = project.project_progress.site_issues;
    this.editProject.desc = project.project_monitoring.desc;
    this.editProject.planned_start_date = new Date(project.project_monitoring.planned_start_date);
    this.editProject.actual_start_date = new Date(project.project_monitoring.actual_start_date);
    this.editProject.planned_end_date = new Date(project.project_monitoring.planned_end_date);
    this.editProject.actual_end_date = new Date(project.project_monitoring.actual_end_date);
    this.editProject.pct_completed_planned = project.project_monitoring.pct_completed_planned;
    this.editProject.pct_completed_actual = project.project_monitoring.pct_completed_actual;
    this.editProject.pct_completed_1wktarget = project.project_monitoring.pct_completed_1wktarget;
    this.editProject.remark = project.project_monitoring.remark;
    this.modalRef = this.modalService.show(template);
  }

  onEdit() {
    //console.log("Saving edit ...");
    this.projectManagementService.updateProject(this.editProject as ProjectManagement)
      .subscribe(project => {
        this.addSuccessToast('Successfully updated', `Saved ${this.editProject.name}`);
        this.projects = this.getAll();
        this.modalRef.hide();
      });
  }

  onSubmit() {
    //console.log(this.model.subcontractors)
    this.projectManagementService.saveProject(this.model as ProjectManagement)
      .subscribe(project => {
        this.addSuccessToast('Successfully added', `Added ${this.model.name}`);
        this.projects = this.getAll();
        this.model = new ProjectManagement(null, '', null, null, '', '', '', '', '', '', '', '', null, null, null, '', null, '', '', null, '', null, null, null, null, '', '', '', null, null, null, null, null, null, null, '', new Date(), new Date(), '', '');
        this.modalRef.hide();
      });
  }

  onDelete(project) {
    this.projectManagementService.deleteProject(project as ProjectManagement)
      .subscribe(project => {
        this.projects = this.getAll();
        this.addSuccessToast('Delete successfully', `Delete ${project.name}`);
        //this.modalRef.hide();
      });
  }

  onChange(evt) {
    //TODO sth.
  }

  onCancel() {
    this.modalRef.hide();
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

  ngOnInit() {
    this.types = [
      { value: 'name', label: 'Name' },
      { value: 'project_country', label: 'Country' }
    ];
    this.selectedTypes = this.types[0];

    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
    
  }

}
