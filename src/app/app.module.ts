// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastyModule } from 'ng2-toasty';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { OrgChartService } from './services/org-chart.service';
import { CarouselModule } from 'ngx-bootstrap';
import { CompanymanagementComponent } from './companymanagement/companymanagement.component';
import { RegCompanyService } from './services/reg-company.service';
import { SelectModule } from 'ng-select';
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


// Services
import { RegistrationService } from './services/registration-user.service';
import { FileUploadService } from './services/file-upload.service';
import { ProjectSubmissionComponent } from './project-submission/project-submission.component';
import { ProjectSubmissionService } from './services/project-submission.service';
import { PersonManagementComponent } from './person-management/person-management.component';
import { PersonManagementService } from './services/person-management.service';
import { ProjectManagementService } from './services/project-management.service';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { ProjectMembersService } from './services/project-members.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CompanymanagementV2Component } from './companymanagement-v2/companymanagement-v2.component';
import { OrgChartV2Component } from './org-chart-v2/org-chart-v2.component';
import { UserGroupV2Component } from './user-group-v2/user-group-v2.component';
import { CodeManagementV3Component } from './code-management-v3/code-management-v3.component';
import { WorkflowService } from './services/workflow.service';
import { WorkflowSubmitService } from './services/workflow-submit.service';
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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    RegUserComponent,
    SearchUserComponent,
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
    BreadcrumbComponent,
    CompanymanagementV2Component,
    OrgChartV2Component,
    UserGroupV2Component,
    CodeManagementV3Component,
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
    LdhMemberService,
    CodeManaService,
    OrgChartService,
    WorkflowService,
    WorkflowSubmitService],

  bootstrap: [AppComponent]

})
export class AppModule { }
