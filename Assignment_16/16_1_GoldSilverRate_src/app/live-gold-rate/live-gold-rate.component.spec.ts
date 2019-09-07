import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGoldRateComponent } from './live-gold-rate.component';

describe('LiveGoldRateComponent', () => {
  let component: LiveGoldRateComponent;
  let fixture: ComponentFixture<LiveGoldRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveGoldRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGoldRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
