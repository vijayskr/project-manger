import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user';
import { ApiResponse } from '../apiresponse/models/apires';

import { Observable } from 'rxjs';

export interface IUserService {
  getUser(userId: number): Observable<ApiResponse<User>>;
  getUsersList(
    searchKey?: string,
    sortKey?: string
  ): Observable<ApiResponse<User[]>>;
  addUser(newUser: User): Observable<ApiResponse<User>>;
  editUser(updateUser: User): Observable<ApiResponse<User>>;
  deleteUser(userId: number): Observable<ApiResponse<User>>;
}

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {
  baseUri = environment.apiBaseUri;

  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<ApiResponse<User>> {
    const uri = `${this.baseUri}${environment.endpoint_user_get}/${userId}`;

    return this.http.get<ApiResponse<User>>(uri);
  }

  getUsersList(
    searchKey?: string,
    sortKey?: string
  ): Observable<ApiResponse<User[]>> {
    // add query string params to search and sort
    let params = new HttpParams();

    if (searchKey) {
      params = params.append('searchKey', searchKey);
    }

    if (sortKey) {
      params = params.append('sortKey', sortKey);
    }

    const uri = `${this.baseUri}${environment.endpoint_user_get}`;

    return this.http.get<ApiResponse<User[]>>(uri, { params: params });
  }

  addUser(newUser: User): Observable<ApiResponse<User>> {
    const uri = `${this.baseUri}${environment.endpoint_user_add}`;

    return this.http.post<ApiResponse<User>>(uri, newUser);
  }

  editUser(updateUser: User): Observable<ApiResponse<User>> {
    const uri = `${this.baseUri}${environment.endpoint_user_edit}/${
      updateUser.User_ID
    }`;

    return this.http.post<ApiResponse<User>>(uri, updateUser);
  }

  deleteUser(userId: number): Observable<ApiResponse<User>> {
    const uri = `${this.baseUri}${environment.endpoint_user_delete}/${userId}`;

    return this.http.get<ApiResponse<User>>(uri);
  }
}





/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

getUsers() {
  return this.http.get(`${this.uri}/users`);
}

addUser(fName, lName, eMail, ssoId) {
  const user = {
    firstName: fName,
    lastName: lName,
    email: eMail,
    ssoID: ssoId
  };
  return this.http.post(`${this.uri}/users/add`, user);
}

editUser(id, doc) {

}

}
*/
