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
  searchcode = new SearchCodeMana('', 'Code');
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  codenum: number;
  addcategory = new AddCategory('', '', true);
  addcode = new AddCodeMana(null, '', '', '', '', true, new Date(), new Date(), '', '', '');
  private editcode: AddCodeMana;
  private resultcode: Observable<AddCodeMana[]>;
  constructor(
    private modalService: BsModalService,
    private codemanaservice: CodeManaService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.codenumber();
  }
  ngOnInit() {
  }
  codenumber() {
    this.codemanaservice.searchcode(null).subscribe(result => {
      let number: Number = result[result.length - 1]._id;
      this.codenum = number + 1;
    });
  }
  openModal(template: TemplateRef<any>) {
    this.codenumber();
    this.modalRef = this.modalService.show(template);
  }
  delete(result) {
    this.codemanaservice.deletecode(result).subscribe();
    this.resultcode = this.codemanaservice.searchcode(null);
  }
  search() {
    this.resultcode = this.codemanaservice.searchcode(this.searchcode);
  }
  edit(result, template: TemplateRef<any>) {
    this.editcode = result;
    this.editcode.categoryCode = result.category_details.categoryCode;
    this.editcode.categoryDesc = result.category_details.categoryDesc;
    this.editcode.code = result.code_details.code;
    this.editcode.code_desc = result.code_details.code_desc ;
    this.editcode.is_category = result.category_details.is_category;
    this.editcode.modified_date = new Date();
    this.modalRef2 = this.modalService.show(template);
  }
  saveeditcode() {
    this.editcode.modified_date = new Date();
    this.codemanaservice.updatecode(this.editcode).subscribe();
    this.resultcode = this.codemanaservice.searchcode(null);
    this.modalRef2.hide();
  }
  savecategory() {
    this.codemanaservice.addcategor(this.addcategory).subscribe();
  }
  saveaddcode() {
    this.addcode._id = this.codenum;
    this.codemanaservice.addcode(this.addcode)
      .subscribe(user => {
        console.log(user);
        this.addSuccessToast('Successfully added', `Added ${this.addcode.code}`);
      });
    this.resultcode = this.codemanaservice.searchcode(null);
    this.addcode = new AddCodeMana(null, '', '', '', '', true, new Date(), new Date(), '', '', '');
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


}
