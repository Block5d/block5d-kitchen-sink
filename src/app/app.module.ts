import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationService } from './services/registration-user.service';
import { UserListComponent } from './user-list/user-list.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastyModule} from 'ng2-toasty';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { SearchUserComponent } from './search-user/search-user.component';
import { TabsModule } from 'ngx-bootstrap';
import { Sampleapp2Component } from './sampleapp2/sampleapp2.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CompanymanagementComponent } from './companymanagement/companymanagement.component';
import { RegCompanyService } from './services/reg-company.service';
import { SelectModule} from 'ng-select';
import { UserGroupService } from './services/user-group.service';
import { UserGroupComponent } from './user-group/user-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    RegUserComponent,
    SearchUserComponent,
    Sampleapp2Component,
    CompanymanagementComponent,
    UserGroupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastyModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    SelectModule
  ],
  providers: [ RegistrationService, RegCompanyService, UserGroupService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
