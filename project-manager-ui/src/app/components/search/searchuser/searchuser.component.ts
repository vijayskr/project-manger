import { FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../adduser/users.service';
import { User } from '../../../models/user';
declare var $: any;

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
  @Input() name: string;
  @Output() userSelected = new EventEmitter<User>();

  Users: User[];
  SortKey: string;
  SearchKey: string;
  SelectedUserID: number;
  enableSelect: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.userService
      .getUsersList(this.SearchKey, this.SortKey)
      .subscribe(response => {
        if (response.Success === true) {
          this.Users = response.Data;
        }
      });
    this.enableSelect = false;
  }

  searchUser(searchValue: string) {
    this.SearchKey = searchValue;
    this.refreshList();
  }

  selectUser(userID: number) {
    this.SelectedUserID = userID;
    this.enableSelect = true;
  }

  addUser() {
    this.userService.getUser(this.SelectedUserID).subscribe(response => {
      if (response.Success === true) {
        this.userSelected.emit(response.Data);
        $('#userSearchModel').modal('toggle');
      }
    });
  }
}
