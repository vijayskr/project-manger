import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { ParentTask } from '../../../models/task';
import { AlertService } from '../../services/alert.service';
import { ApiResponse } from '../../apiresponse/models/apires';

import { Observable } from 'rxjs';

export interface IParentTaskService {
  getParentTask(parentId: number): Observable<ApiResponse<ParentTask>>;
  getParentTaskList(searchKey?: string): Observable<ApiResponse<ParentTask[]>>;
  addParentTask(newParent: ParentTask): Observable<ApiResponse<ParentTask>>;
}

@Injectable({
  providedIn: 'root'
})
export class ParentTaskService implements IParentTaskService {

  baseUri = environment.apiBaseUri;

  constructor(private http: HttpClient) { }


  getParentTask(parentId: number): Observable<ApiResponse<ParentTask>> {

    const uri = `${this.baseUri}${environment.endpoint_parentTask_get}/${parentId}`;

    return this.http
      .get<ApiResponse<ParentTask>>(uri);
  }

  getParentTaskList(searchKey?: string): Observable<ApiResponse<ParentTask[]>> {

    // add query string params to search and sort
    let params = new HttpParams();

    if (searchKey) {
      params = params.append('searchKey', searchKey);
    }

    const uri = `${this.baseUri}${environment.endpoint_parentTask_get}`;

    return this.http
      .get<ApiResponse<ParentTask[]>>(uri, { params: params });
  }

  addParentTask(newParent: ParentTask): Observable<ApiResponse<ParentTask>> {

    const uri = `${this.baseUri}${environment.endpoint_parentTask_add}`;

    return this.http
      .post<ApiResponse<ParentTask>>(uri, newParent);
  }
}
