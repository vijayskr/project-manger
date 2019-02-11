import { UserService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users: User[];
  displayedcolumns = ['userId', 'firstName', 'lastName', 'employeeId', 
                      'projectId', 'taskId', 'actions'];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
