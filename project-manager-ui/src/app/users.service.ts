import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Users } from './models/user';

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