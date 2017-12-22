import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeManaService } from '../services/code-mana.service';
import { AddCodeMana, AddCategory } from '../shared/code-mana';

@Component({
  selector: 'app-code-management',
  templateUrl: './code-management.component.html',
  styleUrls: ['./code-management.component.css']
})
export class CodeManagementComponent implements OnInit {
  categorymodel = false; codemodel = false; editcodemodel = false; isJSON = true; isObject = true; CodeString; categoryCodeString;
  searchtype = [{ label: 'Code', value: 'Code' },
  { label: 'Code Desc.', value: 'CodeDesc' },
  { label: 'Category Desc.', value: 'CateDesc' },
  { label: 'Category Code', value: 'CateCode' }];
  addcategory = new AddCategory('', null, true); selectcategory = null; jsonlist;
  addcode = new AddCodeMana(null, { code_desc: null, code: null },
    { categoryDesc: null, categoryCode: null }, true, new Date(), new Date(), '', '', '');
  editcode = new AddCodeMana(null, { code_desc: null, code: null },
    { categoryDesc: null, categoryCode: null }, null, null, null, '', '', '');
  private resultcode: Observable<AddCategory[]>;
  private category: Observable<AddCategory[]>;
  constructor(
    private codemanaservice: CodeManaService
  ) {
    this.resultcode = this.codemanaservice.searchcategory(null);
  }

  ngOnInit() {
  }
  selectChange(obj) {
    let sth = JSON.parse(JSON.stringify(obj.categoryCode));
    console.log(this.selectcategory);
    this.jsonlist = {};
    this.jsonlist = obj.categoryCode;
  }
  getcategory() {
    this.category = this.codemanaservice.getcategroy();
  }
  closeModal(template) {
    switch (template) {
      case 'categorymodel':
        this.categorymodel = false; break;
      case 'codemodel':
        this.codemodel = false; break;
      case 'editmodel':
        this.editcodemodel = false; console.log(this.editcodemodel); break;
    }
  }
  openModal(template) {
    console.log(template);
    switch (template) {
      case 'categorymodel':
        this.categorymodel = true; break;
      case 'codemodel':
        this.getcategory();
        this.codemodel = true; break;
    }
  }
  delete(result) {
    this.codemanaservice.deletecode(result).subscribe();
    this.resultcode = this.codemanaservice.searchcategory(null);
  }
  edit(result) {
    this.editcodemodel = true;
    this.editcode = result;
    this.editcode.modified_date = new Date();
  }
  saveeditcode() {
    this.editcode.modified_date = new Date();
    console.log(this.editcode);
    this.codemanaservice.updatecode(this.editcode).subscribe();
    this.resultcode = this.codemanaservice.searchcategory(null);
    this.editcodemodel = false;
  }
  savecategory() {
    console.log(this.isJSON);
    if (this.isJSON) {
      this.addcategory.categoryCode = new Array(JSON.parse(this.categoryCodeString));
    } else {
      this.addcategory.categoryCode = this.categoryCodeString.split(',');
    }
    console.log(this.addcategory);
    this.codemanaservice.addcategory(this.addcategory).subscribe(result => {
      this.categorymodel = false;
      this.addcategory = new AddCategory('', null, true);
      this.resultcode = this.codemanaservice.searchcategory(null);
    });
  }
  saveaddcode() {
    console.log(this.addcode);
    this.codemanaservice.addcode(this.addcode).subscribe(result => {
      this.resultcode = this.codemanaservice.searchcategory(null);
      this.codemodel = false;
      this.addcode = new AddCodeMana(null, { code_desc: null, code: null },
        { categoryDesc: null, categoryCode: null }, true, new Date(), new Date(), '', '', '');
    });
  }
}
