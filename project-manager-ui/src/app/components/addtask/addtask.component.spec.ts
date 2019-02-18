import { SearchparentComponent } from './../search/searchparent/searchparent.component';
import { AdduserComponent } from './../adduser/adduser.component';
import { AddtaskComponent } from './../addtask/addtask.component';
import { ViewtaskComponent } from './../viewtask/viewtask.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, from } from 'rxjs';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddprojectComponent } from '../addproject/addproject.component';
import { SearchuserComponent } from '../search/searchuser/searchuser.component';
import { UserService } from '../adduser/users.service';
import { ProjectService } from '../addproject/project.service';
import { AlertService } from '../services/alert.service';
import { User } from '../../models/user';
import { Project } from '../../models/project';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { SearchprojectComponent } from '../search/searchproject/searchproject.component';
import { TaskService } from './services/task.service';

const routes: Routes = [
  { path: 'user', component: AdduserComponent },
  { path: 'task', component: AddtaskComponent },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'project', component: AddprojectComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddprojectComponent,
        SearchuserComponent,
        ViewtaskComponent,
        AddtaskComponent,
        AdduserComponent,
        SearchprojectComponent,
        SearchparentComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot({
          toastClass: 'toast toast-bootstrap-compatibility-fix'
        }),
        RouterModule.forRoot(routes)
      ],
      providers: [
        HttpClientModule,
        UserService,
        AlertService,
        ProjectService,
        TaskService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(
      'Add/Update Task:'
    );
  }));

  it('should call the addTask service', () => {
    const taskService = fixture.debugElement.injector.get(TaskService);
    const spy = spyOn(taskService, 'addTask').and.callFake(() => {
      return from([]);
    });
    fixture.componentInstance.addTask();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the updateTask service', () => {
    const taskService = fixture.debugElement.injector.get(TaskService);

    const spy = spyOn(taskService, 'editTask').and.callFake(() => {
      return from([]);
    });
    fixture.componentInstance.updateTask();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the addParentTask service', () => {
    const taskService = fixture.debugElement.injector.get(TaskService);

    const spy = spyOn(taskService, 'addTask').and.callFake(() => {
      return from([]);
    });
    fixture.componentInstance.addTask();
    expect(spy).toHaveBeenCalled();
  });
});
