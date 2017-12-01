import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegUserComponent }  from './reg-user/reg-user.component';
import { UserListComponent }  from './user-list/user-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SampleApp4Component } from './sample-app4/sample-app4.component'
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { VoteUserComponent } from './vote-user/vote-user.component';
import { ProjectSubmissionComponent } from './project-submission/project-submission.component';
import { PersonManagementComponent } from './person-management/person-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { UploadtoFireStoreComponent } from './uploadto-fire-store/uploadto-fire-store.component'
import { UploadtoS3Component } from './uploadto-s3/uploadto-s3.component';


const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'reg-user', component: RegUserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'search-user', component: SearchUserComponent },
  { path: 'sampleApp4',component:SampleApp4Component},
  { path: 'c-input', component: ParentComponentComponent },
  { path: 'vote-user', component: VoteUserComponent },
  { path: 'pro-sub', component:ProjectSubmissionComponent },
  { path: 'per-mana',component:PersonManagementComponent },
  { path: 'pro-mana',component:ProjectManagementComponent },
  { path: 'pro-mem',component:ProjectMembersComponent },
  { path: 'upload-firebase', component: UploadtoFireStoreComponent },
  { path: 'upload-s3', component: UploadtoS3Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
