import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegUserComponent } from './reg-user/reg-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SampleApp1Component } from './sample-app1/sample-app1.component';
import { CodeManagementComponent} from './code-management/code-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'reg-user', component: RegUserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'search-user', component: SearchUserComponent },
  { path: 'sampleApp1', component: SampleApp1Component },
  { path: 'codeManagement', component: CodeManagementComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
