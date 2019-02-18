import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchuserComponent } from './searchuser.component';

describe('SearchuserComponent', () => {
  let component: SearchuserComponent;
  let fixture: ComponentFixture<SearchuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchuserComponent],
      imports: [HttpClientModule],
      providers: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
