import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchparentComponent } from './searchparent.component';

describe('SearchparentComponent', () => {
  let component: SearchparentComponent;
  let fixture: ComponentFixture<SearchparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
