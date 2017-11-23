import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationService } from './services/registration-user.service';
import { UserListComponent } from './user-list/user-list.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { AppRoutingModule } from './app-routing.module';
import {ToastyModule} from 'ng2-toasty';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { SearchUserComponent } from './search-user/search-user.component';
import { TabsModule } from 'ngx-bootstrap';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { LikeUserComponent } from './like-user/like-user.component';
import { DislikeUserComponent } from './dislike-user/dislike-user.component';
import { VoteUserComponent } from './vote-user/vote-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    RegUserComponent,
    SearchUserComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    LikeUserComponent,
    DislikeUserComponent,
    VoteUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastyModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [ RegistrationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
