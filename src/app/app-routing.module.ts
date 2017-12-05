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
import { ProjectManagementV2Component} from './project-management-v2/project-management-v2.component'

const PROJECT_SETUP: string = 'Project Setup';
const CONFIGURATION: string = 'Configuration';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: 'reg-user',
        component: RegUserComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: 'Create New user'
        }
      },
      {
        path: 'user-list',
        component: UserListComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: 'List of users'
        }
      },
      {
        path: 'search-user', component: SearchUserComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: 'Search User'
        }
      },
      {
        path: 'codeManagement',
        component: CodeManagementComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: 'Code Management'
        }
      },
      {
        path: 'org-chart',
        component: OrgChartComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Organization Chart"
        }
      },
      {
        path: 'company-management',
        component: CompanymanagementComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Company Management"
        }
      },
      {
        path: 'user-group',
        component: UserGroupComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "User Group"
        }
      },
      {
        path: 'workflow',
        component: WorkflowComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Workflow"
        }
      },
      {
        path: 'c-input',
        component: ParentComponentComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Component Interaction (@Input)"
        }
      },
      {
        path: 'vote-user',
        component: VoteUserComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "like & Dislike User (@Output)"
        }
      },
      {
        path: 'pro-sub',
        component: ProjectSubmissionComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Project Submission"
        }
      },
      {
        path: 'per-mana',
        component: PersonManagementComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Person Management"
        }
      },
      {
        path: 'pro-mana',
        component: ProjectManagementComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Project Management"
        }
      },
      {
        path: 'pro-mana-2',
        component:ProjectManagementV2Component,
        data: {
          breadcrumb: "Project Management 2"
        }
      },
      {
        path: 'pro-mem',
        component: ProjectMembersComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Project Members"
        }
      },
      {
        path: 'upload-firebase',
        component: UploadtoFireStoreComponent,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Upload to Firebase Storage"
        }
      },
      {
        path: 'upload-s3', component: UploadtoS3Component,
        data: {
          group: PROJECT_SETUP,
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
