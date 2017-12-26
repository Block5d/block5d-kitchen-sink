//Environment
import { environment } from '../environments/environment';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { OrgChartModule } from 'ng-org-chart';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula'
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SelectModule } from 'ng-select';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { CompanymanagementComponent } from './companymanagement/companymanagement.component';
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
import { WebformTextFieldComponent } from './webform-modal/webform-text-field/webform-text-field.component';
import { WebformNumberComponent } from './webform-modal/webform-number/webform-number.component';
import { WebformPasswordComponent } from './webform-modal/webform-password/webform-password.component';
import { WebformTextAreaComponent } from './webform-modal/webform-text-area/webform-text-area.component';
import { WebformCheckBoxComponent } from './webform-modal/webform-check-box/webform-check-box.component';
import { WebformSelectBoxesComponent } from './webform-modal/webform-select-boxes/webform-select-boxes.component';
import { WebformSelectComponent } from './webform-modal/webform-select/webform-select.component';
import { WebformRadioComponent } from './webform-modal/webform-radio/webform-radio.component';
import { WebformHtmlElementComponent } from './webform-modal/webform-html-element/webform-html-element.component';
import { WebformContentComponent } from './webform-modal/webform-content/webform-content.component';
import { WebformButtonComponent } from './webform-modal/webform-button/webform-button.component';
import { UploadtoLocalComponent } from './uploadto-local/uploadto-local.component';
import { ProjectSubmissionComponent } from './project-submission/project-submission.component';
import { PersonManagementComponent } from './person-management/person-management.component';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { CodeManagementComponent } from './code-management/code-management.component';

// Services
import { UserGroupService } from './services/user-group.service';
import { RegCompanyService } from './services/reg-company.service';
import { OrgChartService } from './services/org-chart.service';
import { CodeManaService } from './services/code-mana.service';
import { RegistrationService } from './services/registration-user.service';
import { FileUploadService } from './services/file-upload.service';
import { ProjectSubmissionService } from './services/project-submission.service';
import { PersonManagementService } from './services/person-management.service';
import { ProjectManagementService } from './services/project-management.service';
import { ProjectMembersService } from './services/project-members.service';
import { ProjectMembersV2Component } from './project-members-v2/project-members-v2.component';
import { WebformComponent } from './webform/webform.component';

import { WorkflowService } from './services/workflow.service';
import { WorkflowSubmitService } from './services/workflow-submit.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    RegUserComponent,
    SearchUserComponent,
    CompanymanagementComponent,
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
    BreadcrumbComponent,
    WebformComponent,
    OrgChartComponent,
    UserGroupComponent,
    CodeManagementComponent,
    WebformTextFieldComponent,
    WebformNumberComponent,
    WebformPasswordComponent,
    WebformTextAreaComponent,
    WebformCheckBoxComponent,
    WebformSelectBoxesComponent,
    WebformSelectComponent,
    WebformRadioComponent,
    WebformHtmlElementComponent,
    WebformContentComponent,
    WebformButtonComponent,
    UploadtoLocalComponent,
  ],
  imports: [
    DragulaModule,
    BrowserModule,
    SelectModule,
    OrgChartModule,
    NgxJsonViewerModule,
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
      libraries: ['places']
    }),
    NgZorroAntdModule.forRoot(),
    ProgressbarModule.forRoot(),
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [RegistrationService,
    FileUploadService,
    ProjectSubmissionService,
    PersonManagementService,
    ProjectManagementService,
    RegCompanyService,
    UserGroupService,
    ProjectMembersService,
    CodeManaService,
    OrgChartService,
    WorkflowService,
    WorkflowSubmitService],

  bootstrap: [AppComponent]

})
export class AppModule { }
