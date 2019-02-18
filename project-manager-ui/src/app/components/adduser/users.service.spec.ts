import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './users.service';
import { of } from 'rxjs';

describe('UserService', () => {
  let usersService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [HttpClientModule, UserService]
    }).compileComponents();

    usersService = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          First_Name: 'Vijay',
          Last_Name: 'Sankar',
          Employee_ID: 27431333
        },
        {
          First_Name: 'Aarav',
          Last_Name: 'Sankar',
          Employee_ID: 27431433
        }
      ];
      let response;
      spyOn(usersService, 'getUsersList').and.returnValue(of(userResponse));

      usersService.getUsersList().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
        First_Name: 'Aarav',
        Last_Name: 'Sankar',
        Employee_ID: 27431433
      };
      let response;
      spyOn(usersService, 'getUser').and.returnValue(of(userResponse));

      usersService.getUser(2).subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
