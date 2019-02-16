import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserComponent } from './adduser.component';
import {
  Component,
  OnInit,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { UserService } from './users.service';
import { AlertService } from '../services/alert.service';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiResponse } from '../apiresponse/models/apires';
import { of } from 'rxjs';

class MockUserService {
  users: User[];
  constructor() {
    this.users = <User[]>[
      { First_Name: 'VJ', Last_Name: 'Bala', Employee_ID: 159159 },
      { First_Name: 'Sank', Last_Name: 'V', Employee_ID: 159151 }
    ];
  }
  getUsersList(
    searchKey: string,
    sortKey: string
  ): Observable<ApiResponse<User[]>> {
    const response = <ApiResponse<User[]>>{ Success: true, Data: this.users };
    return of(response);
  }
}

class MockAlertService {}

describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;


 beforeEach(() => {
   TestBed.configureTestingModule({
     declarations: [AdduserComponent],
     imports: [FormsModule, ReactiveFormsModule],
     providers: [
       { provide: UserService, useClass: MockUserService },
       FormBuilder,
       { provide: AlertService, useClass: MockAlertService }
     ]
   }).compileComponents();
   fixture = TestBed.createComponent(AdduserComponent);
   component = fixture.debugElement.componentInstance;
 });

 it('should create a component', async(() => {
   expect(component).toBeTruthy();
 }));

 it('should run #createForm()', async(() => {
   const result = component.createForm();
   expect(component.userForm.controls['firstName'].value === '');
 }));

 it('should run #ngOnInit()', async(() => {}));

 it('should run #refreshList()', async(() => {
   const result = component.refreshList();
   expect(component.Users.length === 2);
 }));

 it('should run #addorUpdateUser()', async(() => {
   // const result = component.addorUpdateUser();
 }));

 it('should run #addUser()', async(() => {
   // const result = component.addUser();
 }));

 it('should run #editUser()', async(() => {
   // const result = component.editUser(userID);
 }));

 it('should run #updateUser()', async(() => {
   // const result = component.updateUser();
 }));

 it('should run #deleteUser()', async(() => {
   // const result = component.deleteUser(userID);
 }));

 it('should run #reset()', async(() => {
   // const result = component.reset();
 }));

 it('should run #search()', async(() => {
   // const result = component.search(searchValue);
 }));

 it('should run #sort()', async(() => {
   // const result = component.sort(sortKey);
 }));
});
