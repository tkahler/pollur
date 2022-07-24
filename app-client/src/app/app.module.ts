import '../polyfills';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollCreatorComponent } from './poll/poll-creator/poll-creator.component';
import { PollCardComponent } from './poll/poll-card/poll-card.component';

import { HeaderComponent } from './header/header.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {PollListComponent} from './poll/poll-list/poll-list.component';
import {PollContainerComponent} from './poll/poll-container/poll-container.component';
import {LoginComponent} from './login/login.component';
import {ModalService} from './shared/modal.service';
import {LoginService} from './login/login.service';
import {AuthService} from './shared/auth.service';
import {AuthInterceptor} from './shared/auth-interceptor';
import {UserService} from './shared/user.service';
import {InfiniteScrollComponent} from './shared/infinite-scroll.component';
import {PollListFilterComponent} from './poll/poll-list/poll-list-filter.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {VotePipe} from './shared/vote.pipe';
import {UserProfileComponent} from './profile/user-profile.component';
import {PollListContainerComponent} from './poll/poll-list/poll-list-container.component';


@NgModule({
  declarations: [
    AppComponent,
    PollCreatorComponent,
    PollCardComponent,
    PollListComponent,
    PollContainerComponent,
    LoginComponent,
    HeaderComponent,
    InfiniteScrollComponent,
    PollListFilterComponent,
    VotePipe,
    UserProfileComponent,
    PollListContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot()
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ModalService,
    LoginService,
    AuthService,
    UserService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
     useValue: { appearance: 'fill' } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule { }
