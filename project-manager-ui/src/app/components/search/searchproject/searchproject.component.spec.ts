import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchprojectComponent } from './searchproject.component';

describe('SearchprojectComponent', () => {
  let component: SearchprojectComponent;
  let fixture: ComponentFixture<SearchprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchprojectComponent],
      imports: [HttpClientModule],
      providers: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
