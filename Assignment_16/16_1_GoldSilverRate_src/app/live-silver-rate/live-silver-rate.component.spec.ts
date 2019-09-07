import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSilverRateComponent } from './live-silver-rate.component';

describe('LiveSilverRateComponent', () => {
  let component: LiveSilverRateComponent;
  let fixture: ComponentFixture<LiveSilverRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveSilverRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSilverRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
