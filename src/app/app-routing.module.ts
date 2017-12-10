import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegUserComponent } from './reg-user/reg-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { CodeManagementComponent } from './code-management/code-management.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { CompanymanagementComponent } from './companymanagement/companymanagement.component';
import { CompanymanagementV2Component } from './companymanagement-v2/companymanagement-v2.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGroupV2Component } from './user-group-v2/user-group-v2.component'; 
import { WorkflowComponent } from './workflow/workflow.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { VoteUserComponent } from './vote-user/vote-user.component';
import { ProjectSubmissionComponent } from './project-submission/project-submission.component';
import { PersonManagementComponent } from './person-management/person-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { UploadtoFireStoreComponent } from './uploadto-fire-store/uploadto-fire-store.component';
import { UploadtoS3Component } from './uploadto-s3/uploadto-s3.component';
import { CodeManagementV2Component } from './code-management-v2/code-management-v2.component';
import { OrgChartV2Component } from './org-chart-v2/org-chart-v2.component';
import { ProjectManagementV2Component} from './project-management-v2/project-management-v2.component';
import { ProjectMembersV2Component } from './project-members-v2/project-members-v2.component';
import { PersonManagementV2Component} from './person-management-v2/person-management-v2.component';

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
          breadcrumb: "Code Management"
        }
      },
      {
        path: 'codeManagementV2',
        component: CodeManagementV2Component,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: 'Code Management V2'
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
        path: 'org-chartV2',
        component: OrgChartV2Component,
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
        path: 'company-managementv2',
        component: CompanymanagementV2Component,
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
        path: 'user-group-v2',
        component: UserGroupV2Component,
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
          group: CONFIGURATION,
          breadcrumb: "Component Interaction (@Input)"
        }
      },
      {
        path: 'vote-user',
        component: VoteUserComponent,
        data: {
          group: CONFIGURATION,
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
        path: 'per-mana-2',
        component: PersonManagementV2Component,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Person Management 2"
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
          group: PROJECT_SETUP,
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
        path: 'pro-mem-2',
        component: ProjectMembersV2Component,
        data: {
          group: PROJECT_SETUP,
          breadcrumb: "Project Members 2"
        }
      },
      {
        path: 'upload-firebase',
        component: UploadtoFireStoreComponent,
        data: {
          group: CONFIGURATION,
          breadcrumb: "Upload to Firebase Storage"
        }
      },
      {
        path: 'upload-s3', component: UploadtoS3Component,
        data: {
          group: CONFIGURATION,
          breadcrumb: "Upload to AWS S3"
        }
      }
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
