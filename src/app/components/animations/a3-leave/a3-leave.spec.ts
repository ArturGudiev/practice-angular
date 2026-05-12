import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3Leave } from './a3-leave';

describe('A3Leave', () => {
  let component: A3Leave;
  let fixture: ComponentFixture<A3Leave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A3Leave],
    }).compileComponents();

    fixture = TestBed.createComponent(A3Leave);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
