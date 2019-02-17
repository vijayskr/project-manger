import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule,
  MatDividerModule, MatSnackBarModule, matFormFieldAnimations } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {
  NgbModule,
  NgbDateParserFormatter,
  NgbDateAdapter,
  NgbDateNativeAdapter
} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AddprojectComponent } from './components/addproject/addproject.component';

import { UserService } from './components/adduser/users.service';
import { AlertService } from './components/services/alert.service';
import { DatecompDirective } from './directives/datecomp.directive';
import { ParentTaskService } from './components/addtask/services/parent-task.service';
import { TaskService } from './components/addtask/services/task.service';
import { NgbDateMomentParserFormatter } from './formatter/date.formatter';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';
import { SearchuserComponent } from './components/search/searchuser/searchuser.component';
import { SearchparentComponent } from './components/search/searchparent/searchparent.component';
import { SearchprojectComponent } from './components/search/searchproject/searchproject.component';

const routes: Routes = [
  { path: 'user', component: AdduserComponent },
  { path: 'task', component: AddtaskComponent },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'project', component: AddprojectComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    AddtaskComponent,
    AddprojectComponent,
    DatecompDirective,
    ViewtaskComponent,
    SearchuserComponent,
    SearchparentComponent,
    SearchprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot({toastClass: 'toast toast-bootstrap-compatibility-fix'}),
    NgbModule.forRoot()
  ],
  providers: [
    HttpClientModule,
    ToastrService,
    UserService,
    ParentTaskService,
    TaskService,
    AlertService,
    {
      provide: NgbDateParserFormatter,
      useFactory: () => {
        return new NgbDateMomentParserFormatter('MM/DD/YYYY');
      }
    },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
