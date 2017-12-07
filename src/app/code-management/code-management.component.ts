import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs';
import { CodeManaService } from '../services/code-mana.service';
import { AddCodeMana, SearchCodeMana, AddCategory } from '../shared/code-mana';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
  selector: 'app-code-management',
  templateUrl: './code-management.component.html',
  styleUrls: ['./code-management.component.css']
})

export class CodeManagementComponent implements OnInit {
  categorymodel= false; codemodel= false; editcodemodel= false;
  searchcode = new SearchCodeMana('', 'Code');
  codenum: number;
  searchtype = [{label: 'Code', value: 'Code'},
    {label: 'Code Desc.', value: 'CodeDesc'},
    {label: 'Category Desc.', value: 'CateDesc'},
    {label: 'Category Code', value: 'CateCode'}];
    addcategory = new AddCategory('', {}, true);
    addcode = new AddCodeMana(null, null, null, true, new Date(), new Date(), '', '', '');
    editcode = new AddCodeMana(null, null, null, null, null, null, '', '', '');
  private resultcode: Observable<AddCodeMana[]>;
  private category: Observable<AddCategory[]>;
  constructor(
    private modalService: BsModalService,
    private codemanaservice: CodeManaService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
  }
  ngOnInit() {
  }
  getcategory() {
    this.category = this.codemanaservice.getcategroy();
  }
  closeModal(template) {
    switch (template) {
      case 'categorymodel' :
      this.categorymodel = false; break;
      case 'codemodel' :
      this.codemodel = false; break;
      case 'editmodel' :
      this.editcodemodel = false; console.log(this.editcodemodel);  break;
    }
  }
  openModal(template) {
    console.log(template);
    switch (template) {
      case 'categorymodel' :
      this.categorymodel = true; break;
      case 'codemodel' :
      this.getcategory();
      this.codemodel = true; break;
    }
  }
  delete(result) {
    this.codemanaservice.deletecode(result).subscribe();
    this.resultcode = this.codemanaservice.searchcode(null);
  }
  search() {
    this.resultcode = this.codemanaservice.searchcode(this.searchcode);
  }
  edit(result) {
    this.editcodemodel = true;
    this.editcode = result;
    this.editcode.modified_date = new Date();
  }
  saveeditcode() {
    this.editcode.modified_date = new Date();
    this.codemanaservice.updatecode(this.editcode).subscribe();
    this.resultcode = this.codemanaservice.searchcode(null);
    this.editcodemodel = false;
  }
  savecategory() {
    console.log(this.addcategory);
    this.codemanaservice.addcategory(this.addcategory).subscribe();
    this.categorymodel = false;
  }
  saveaddcode() {
    this.addcode._id = this.codenum;
    this.codemanaservice.addcode(this.addcode).subscribe();
    this.resultcode = this.codemanaservice.searchcode(null);
    this.addcode = new AddCodeMana(null, null, null, true, new Date(), new Date(), '', '', '');
    this.codemodel = false;
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
