// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {ToastyModule} from 'ng2-toasty';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { SelectModule } from 'ng-select';
import { AgmCoreModule } from '@agm/core';

import { ProgressbarModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SampleApp4Component } from './sample-app4/sample-app4.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    RegUserComponent,
    SearchUserComponent,
    SampleApp4Component,
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
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    SelectModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDcUr3um3aXl67B1kWg_Q3Cos4EjC-X2uo",
      libraries: ["places"]
    })
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [ RegistrationService, FileUploadService, ProjectSubmissionService, PersonManagementService, ProjectManagementService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
