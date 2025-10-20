import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOffRequests } from './time-off-requests';

describe('TimeOffRequests', () => {
  let component: TimeOffRequests;
  let fixture: ComponentFixture<TimeOffRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOffRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOffRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
