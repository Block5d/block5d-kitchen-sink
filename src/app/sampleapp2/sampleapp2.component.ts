import { Component, OnInit , TemplateRef} from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';//窗口折叠
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap';//幻灯片
import { RegistrationService } from '../services/registration-user.service';
import { RegistrationUser } from '../shared/registration-user';
import { Observable } from 'rxjs';
import { SearchUsrCriteria } from '../shared/search-user';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-sampleapp2',
  templateUrl: './sampleapp2.component.html',
  styleUrls: ['./sampleapp2.component.css']
})
export class Sampleapp2Component implements OnInit {
  private users : Observable<RegistrationUser>[];
  private user: Observable<RegistrationUser>;
  model = new SearchUsrCriteria('', '',null,null);
  minDate: Date;
  maxDate: Date;
  constructor(private registrationService: RegistrationService,private modalService: BsModalService) { 
    //this.users = this.getAllUsers(this.model.keyword);
    for (let i = 0; i < 4; i++) {
           this.addSlide();
         }
         this.minDate = new Date();
         this.maxDate = new Date();
         this.minDate.setDate(this.minDate.getDate() - 1);
         this.maxDate.setDate(this.maxDate.getDate() + 7);
    //console.log(this.users);
  }

  status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  onSearch(){
    this.users = this.getAllUsers(this.model.keyword);
    console.log("111"+this.model);
    //this.userCount = this.users.length;
  }
  getAllUsers(keyword:string ):any;
  getAllUsers(keyword:null):any;
  getAllUsers(keyword):any{
    if (typeof keyword == null){
      console.log(keyword);
      return  this.registrationService.getAllUsers(null);
    }else 
    if(typeof keyword == "string"){
      console.log(keyword);
      return
      //return this.registrationService.searchUsersByFullName(keyword,1);
    }
  }
  oneAtATime: boolean = true;
  // getAllUsers1(keyword){
  //   return this.registrationService.searchUsersByFullName(keyword,1);
  // }
  // getAllUsers(){
  //   return this.registrationService.getAllUsers(null);
  // }
  ngOnInit() {
  }

  myInterval: number = 1500;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
 
  // constructor() {
  //   for (let i = 0; i < 4; i++) {
  //     this.addSlide();
  //   }
  // }
 
  addSlide(): void {
    this.slides.push({
      image: `assets/images/nature/${this.slides.length % 8 + 1}.jpg`
    });
  }
 
  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

  modalRef: BsModalRef;
  message: string;
  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
}

