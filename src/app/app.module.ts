// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { OrgChartModule } from 'ng-org-chart';
import { LdhMemberService } from './services/ldh-member.service';
import { CodeManaService } from './services/code-mana.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { ProgressbarModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastyModule} from 'ng2-toasty';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CodeManagementComponent } from './code-management/code-management.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { OrgChartService } from './services/org-chart.service';
import { CarouselModule } from 'ngx-bootstrap';
import { CompanymanagementComponent } from './companymanagement/companymanagement.component';
import { RegCompanyService } from './services/reg-company.service';
import { SelectModule} from 'ng-select';
import { UserGroupService } from './services/user-group.service';
import { UserGroupComponent } from './user-group/user-group.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { LikeUserComponent } from './like-user/like-user.component';
import { DislikeUserComponent } from './dislike-user/dislike-user.component';
import { VoteUserComponent } from './vote-user/vote-user.component';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { UploadtoS3Component } from './uploadto-s3/uploadto-s3.component';
import { UploadtoFireStoreComponent } from './uploadto-fire-store/uploadto-fire-store.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PaginationComponent } from './pagination/pagination.component';


//Services
import { RegistrationService } from './services/registration-user.service';
import { FileUploadService } from './services/file-upload.service';
import { ProjectSubmissionComponent } from './project-submission/project-submission.component';
import { ProjectSubmissionService } from './services/project-submission.service';
import { PersonManagementComponent } from './person-management/person-management.component';
import { PersonManagementService } from './services/person-management.service';
import { ProjectManagementService } from './services/project-management.service';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { ProjectMembersService } from './services/project-members.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    RegUserComponent,
    SearchUserComponent,
    CodeManagementComponent,
    OrgChartComponent,
    CompanymanagementComponent,
    UserGroupComponent,
    WorkflowComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    LikeUserComponent,
    DislikeUserComponent,
    VoteUserComponent,
    FileUploadComponent,
    UploadtoS3Component,
    UploadtoFireStoreComponent,
    ProjectSubmissionComponent,
    PersonManagementComponent,
    ProjectManagementComponent,
    PaginationComponent,
    LoadingSpinnerComponent,
    ProjectMembersComponent,

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
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    SelectModule,
    AgmCoreModule.forRoot({
      apiKey: environment.AGM_API_KEY,
      libraries: ["places"]
    }),
    NgZorroAntdModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [ RegistrationService,
               FileUploadService,
               ProjectSubmissionService,
               PersonManagementService,
               ProjectManagementService,
               RegCompanyService,
               UserGroupService,
               ProjectMembersService,
               LdhMemberService,
               CodeManaService,
               OrgChartService  ],

bootstrap: [ AppComponent ]

})
export class AppModule { }
