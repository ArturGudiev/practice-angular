import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3LeaveAnswer } from './a3-leave-answer';

describe('A3LeaveAnswer', () => {
  let component: A3LeaveAnswer;
  let fixture: ComponentFixture<A3LeaveAnswer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A3LeaveAnswer],
    }).compileComponents();

    fixture = TestBed.createComponent(A3LeaveAnswer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
