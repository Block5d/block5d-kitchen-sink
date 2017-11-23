import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegUserComponent }  from './reg-user/reg-user.component';
import { UserListComponent }  from './user-list/user-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { VoteUserComponent } from './vote-user/vote-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'reg-user', component: RegUserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'search-user', component: SearchUserComponent },
  { path: 'c-input', component: ParentComponentComponent },
  { path: 'vote-user', component: VoteUserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
