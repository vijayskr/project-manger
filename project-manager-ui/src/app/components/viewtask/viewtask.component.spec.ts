import { Project } from './../../models/project';
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
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { SearchprojectComponent } from '../search/searchproject/searchproject.component';
import { TaskService } from '../addtask/services/task.service';

const routes: Routes = [
  { path: 'user', component: AdduserComponent },
  { path: 'task', component: AddtaskComponent },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'project', component: AddprojectComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;
  // let project: Project;

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
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('View Task(s):');
  }));

  it('should call the getTask service', () => {
    const taskService = fixture.debugElement.injector.get(TaskService);
    const spy = spyOn(taskService, 'getTask').and.callFake(() => {
      return from([]);
    });
    fixture.componentInstance.editTask(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the endTask service', () => {
    const taskService = fixture.debugElement.injector.get(TaskService);

    const spy = spyOn(taskService, 'endTask').and.callFake(() => {
      return from([]);
    });
    fixture.componentInstance.endTask(1);
    expect(spy).toHaveBeenCalled();
  });
/*
  it('should invoke the Sort event.', async(() => {
    component.sortTask('Priority');
    expect(component.sortTask).toBeTruthy();
  }));

  it('should invoke the refreshList event.', async(() => {
    const taskService = fixture.debugElement.injector.get(TaskService);
    const tasks = [];
    const spy = spyOn(taskService, 'getTasksList').and.callFake(() => {
      return from([tasks]);
    });
    fixture.componentInstance.refreshList();
    expect(spy).toHaveBeenCalled();
  }));*/
});
