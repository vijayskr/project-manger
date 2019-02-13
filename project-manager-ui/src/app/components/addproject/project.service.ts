import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Project } from '../../models/project';
import { ApiResponse } from '../apiresponse/models/apires';

import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    baseUri = environment.apiBaseUri;

    constructor(private http: HttpClient) { }

    getProjects(searchKey: string, sortKey: string): Observable<ApiResponse<Project[]>> {

        // add query string params to search and sort
        let params = new HttpParams();

        if (searchKey) {
            params = params.append('searchKey', searchKey);
        }

        if (sortKey) {
            params = params.append('sortKey', sortKey);
        }

        const uri = `${this.baseUri}${environment.endpoint_project_get}`;

        return this.http
            .get<ApiResponse<Project[]>>(uri, { params: params });
    }

    getProject(projectId: number): Observable<ApiResponse<Project>> {

        const uri = `${this.baseUri}${environment.endpoint_project_get}/${projectId}`;

        return this.http
            .get<ApiResponse<Project>>(uri);
    }

    addProject(newProject: Project): Observable<ApiResponse<Project>> {

        const uri = `${this.baseUri}${environment.endpoint_project_add}`;

        return this.http
            .post<ApiResponse<Project>>(uri, newProject);
    }


  editProject(updateProject: Project): Observable<ApiResponse<Project>> {

    const uri = `${this.baseUri}${environment.endpoint_project_edit}/${updateProject.Project_ID}`;

    return this.http
      .post<ApiResponse<Project>>(uri, updateProject);
  }

    deleteProject(projectID: number): Observable<ApiResponse<Project>> {

        const uri = `${this.baseUri}${environment.endpoint_project_delete}/${projectID}`;

        return this.http
            .get<ApiResponse<Project>>(uri);
    }
}
