import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeManaService } from '../services/code-mana.service';
import { AddCodeMana, SearchCodeMana, AddCategory } from '../shared/code-mana';

@Component({
  selector: 'app-code-management-v2',
  templateUrl: './code-management-v2.component.html',
  styleUrls: ['./code-management-v2.component.css']
})
export class CodeManagementV2Component implements OnInit {
  categorymodel= false; codemodel= false; editcodemodel= false;
  searchcode = new SearchCodeMana('', 'Code');
  searchtype = [{label: 'Code', value: 'Code'},
    {label: 'Code Desc.', value: 'CodeDesc'},
    {label: 'Category Desc.', value: 'CateDesc'},
    {label: 'Category Code', value: 'CateCode'}];
  addcategory = new AddCategory('', '', true);
  addcode = new AddCodeMana(null, '', '', null, '', '', true, new Date(), new Date(), '', '', '');
  editcode = new AddCodeMana(null, '', '', null, '', '', null, null, null, '', '', '');
  private resultcode: Observable<AddCodeMana[]>;
  private category: Observable<AddCategory[]>;
  constructor(
    private codemanaservice: CodeManaService
  ) { }

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
    this.editcode.categoryCode = result.category_details.categoryCode;
    this.editcode.categoryDesc = result.category_details.categoryDesc;
    this.editcode.code = result.code_details.code;
    this.editcode.code_desc = result.code_details.code_desc ;
    this.editcode.is_category = result.category_details.is_category;
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
    this.codemanaservice.addcategory(this.addcategory).subscribe(result => {
      console.log(result);
      this.categorymodel = false;
      this.addcategory = new AddCategory('', '', true);
    });
  }
  saveaddcode() {
    console.log(this.addcode);
    this.addcode.categoryDesc = this.addcode.category.categoryDesc;
    this.addcode.categoryCode = this.addcode.category.categoryCode;
    this.codemanaservice.addcode(this.addcode).subscribe();
    this.resultcode = this.codemanaservice.searchcode(null);
    this.codemodel = false;
    this.addcode = new AddCodeMana(null, '', '', null, '', '', true, new Date(), new Date(), '', '', '');
  }
}
