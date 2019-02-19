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
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable, from } from 'rxjs';
import { ApiResponse } from '../apiresponse/models/apires';
import { of } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';

const routes: Routes = [
  { path: 'user', component: AdduserComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

describe('AdduserComponent', () => {
    let component: AdduserComponent;
    let fixture: ComponentFixture<AdduserComponent>;
    let debugElement: DebugElement;
    let el: HTMLElement;



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdduserComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot({
          toastClass: 'toast toast-bootstrap-compatibility-fix'
        }),
        RouterModule.forRoot(routes)
      ],
      providers: [
        FormBuilder,
        ToastrService,
        HttpClientModule,
        UserService,
        AlertService
      ]
    }).compileComponents();
  });

    beforeEach(() => {
      fixture = TestBed.createComponent(AdduserComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      debugElement = fixture.debugElement;
      el = debugElement.nativeElement;
    });

  it('should create a component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should invoke the refreshList event.', async(() => {
    const userService = fixture.debugElement.injector.get(UserService);
    const users = [];
    const spy = spyOn(userService, 'getUsersList').and.callFake(() => {
      return from([users]);
    });
    component.refreshList();
    expect(spy).toHaveBeenCalled();
  }));

  it('should invoke the reset event.', async(() => {
    component.reset();
    expect(component.reset).toBeTruthy();
  }));

  it('should call the appUser service', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    const users = [];
    const spy = spyOn(userService, 'addUser').and.callFake(() => {
      return from([users]);
    });
    component.addUser();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the editUser service', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    const users = [];
    const spy = spyOn(userService, 'getUser').and.callFake(() => {
      return from([users]);
    });
    component.editUser(1);
    expect(spy).toHaveBeenCalled();
  });
});
