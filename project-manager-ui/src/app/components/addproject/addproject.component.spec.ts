import { SearchparentComponent } from './../search/searchparent/searchparent.component';
import { AdduserComponent } from './../adduser/adduser.component';
import { AddtaskComponent } from './../addtask/addtask.component';
import { ViewtaskComponent } from './../viewtask/viewtask.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, from } from 'rxjs';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddprojectComponent } from './addproject.component';
import { SearchuserComponent } from '../search/searchuser/searchuser.component';
import { UserService } from '../adduser/users.service';
import { ProjectService } from './project.service';
import { AlertService } from '../services/alert.service';
import { User } from '../../models/user';
import { Project } from '../../models/project';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { SearchprojectComponent } from '../search/searchproject/searchproject.component';

const routes: Routes = [
  { path: 'user', component: AdduserComponent },
  { path: 'task', component: AddtaskComponent },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'project', component: AddprojectComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

describe('AddprojectComponent', () => {
  let component: AddprojectComponent;
  let fixture: ComponentFixture<AddprojectComponent>;

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
      providers: [HttpClientModule, UserService, AlertService, ProjectService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create Add Project Component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(
      'Add/Update Project:'
    );
  }));

  it('should use the Projects from the service', () => {
    const projectService = fixture.debugElement.injector.get(ProjectService);
    const projects = [];
    const spy = spyOn(projectService, 'getProjects').and.callFake(() => {
      return from([projects]);
    });
    fixture.componentInstance.refreshList();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the appProject service', () => {
    const projectService = fixture.debugElement.injector.get(ProjectService);
    const projects = [];
    const spy = spyOn(projectService, 'addProject').and.callFake(() => {
      return from([projects]);
    });
    fixture.componentInstance.addProject();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the updateProject service', () => {
    const projectService = fixture.debugElement.injector.get(ProjectService);
    const projects = [];
    const spy = spyOn(projectService, 'editProject').and.callFake(() => {
      return from([projects]);
    });
    fixture.componentInstance.updateProject();
    expect(spy).toHaveBeenCalled();
  });
});
