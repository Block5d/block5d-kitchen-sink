import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegUserComponent } from './reg-user/reg-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { CodeManagementComponent} from './code-management/code-management.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { CompanymanagementComponent } from "./companymanagement/companymanagement.component";
import { UserGroupComponent} from "./user-group/user-group.component";
import { WorkflowComponent } from './workflow/workflow.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { VoteUserComponent } from './vote-user/vote-user.component';
import { ProjectSubmissionComponent } from './project-submission/project-submission.component';
import { PersonManagementComponent } from './person-management/person-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { UploadtoFireStoreComponent } from './uploadto-fire-store/uploadto-fire-store.component'
import { UploadtoS3Component } from './uploadto-s3/uploadto-s3.component';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: 'reg-user',
        component: RegUserComponent,
        data: {
          breadcrumb: "Registration"
        }
      },
      {
        path: 'user-list',
        component: UserListComponent,
        data: {
          breadcrumb: "list of users"
        }
      },
      {
        path: 'search-user', component: SearchUserComponent,
        data: {
          breadcrumb: "Search by full name"
        }
      },
      {
        path: 'codeManagement',
        component: CodeManagementComponent,
        data: {
          breadcrumb: "Code Management"
        }
      },
      {
        path: 'org-chart',
        component: OrgChartComponent,
        data: {
          breadcrumb: "org-chart"
        }
      },
      {
        path: 'company-management',
        component: CompanymanagementComponent,
        data: {
          breadcrumb: "Company Management"
        }
      },
      {
        path: 'user-group',
        component:UserGroupComponent,
        data: {
          breadcrumb: "User Group"
        }
      },
      {
        path: 'workflow',
        component:WorkflowComponent,
        data: {
          breadcrumb: "Workflow"
        }
      },
      {
        path: 'c-input',
        component: ParentComponentComponent,
        data: {
          breadcrumb: "Component Interaction (@Input)"
        }
      },
      {
        path: 'vote-user',
        component: VoteUserComponent,
        data: {
          breadcrumb: "like & Dislike User (@Output)"
        }
      },
      {
        path: 'pro-sub',
        component:ProjectSubmissionComponent,
        data: {
          breadcrumb: "Project Submission"
        }
      },
      {
        path: 'per-mana',
        component:PersonManagementComponent,
        data: {
          breadcrumb: "Person Management"
        }
      },
      {
        path: 'pro-mana',
        component:ProjectManagementComponent,
        data: {
          breadcrumb: "Project Management"
        }
      },
      {
        path: 'pro-mem',
        component:ProjectMembersComponent,
        data: {
          breadcrumb: "Project Members"
        }
      },
      {
        path: 'upload-firebase',
        component: UploadtoFireStoreComponent,
        data: {
          breadcrumb: "Upload to Firebase Storage"
        }
      },
      {
        path: 'upload-s3', component: UploadtoS3Component,
        data: {
          breadcrumb: "Upload to AWS S3"
        }
      }
    ]},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
