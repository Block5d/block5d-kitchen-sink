import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegUserComponent }  from './reg-user/reg-user.component';
import { UserListComponent }  from './user-list/user-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { Sampleapp2Component } from './sampleapp2/sampleapp2.component';
import { CompanymanagementComponent } from "./companymanagement/companymanagement.component";
import { ProjectComponent} from "./project/project.component"
const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'reg-user', component: RegUserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'search-user', component: SearchUserComponent },
  { path: 'sampleApp2', component: Sampleapp2Component },
  { path: 'company-management', component: CompanymanagementComponent},
  { path: 'project', component:ProjectComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
