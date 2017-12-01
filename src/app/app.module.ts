import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule} from 'ngx-bootstrap';
import { AlertModule} from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { SelectModule } from 'ng-select';
import { OrgChartModule } from 'ng-org-chart';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationService } from './services/registration-user.service';
import { LdhMemberService } from './services/ldh-member.service';
import { CodeManaService } from './services/code-mana.service';
import { UserListComponent } from './user-list/user-list.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastyModule } from 'ng2-toasty';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { SearchUserComponent } from './search-user/search-user.component';
import { TabsModule } from 'ngx-bootstrap';
import { SampleApp1Component } from './sample-app1/sample-app1.component';
import { LdhMember } from './shared/ldh-member';
import { CodeManagementComponent } from './code-management/code-management.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { OrgChartService } from './services/org-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    RegUserComponent,
    SearchUserComponent,
    SampleApp1Component,
    CodeManagementComponent,
    OrgChartComponent,
  ],
  imports: [
    BrowserModule,
    SelectModule,
    OrgChartModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastyModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [ RegistrationService, LdhMemberService, CodeManaService, OrgChartService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
