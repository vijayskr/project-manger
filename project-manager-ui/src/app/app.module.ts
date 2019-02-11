import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule,
  MatDividerModule, MatSnackBarModule, matFormFieldAnimations } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AddprojectComponent } from './components/addproject/addproject.component';

const routes: Routes = [
  { path: 'user', component: AdduserComponent },
  { path: 'task', component: AddtaskComponent },
  { path: 'project', component: AddprojectComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    AddtaskComponent,
    AddprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
