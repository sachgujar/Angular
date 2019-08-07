import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugHeaderComponent } from './bug-header.component';

describe('BugHeaderComponent', () => {
  let component: BugHeaderComponent;
  let fixture: ComponentFixture<BugHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
