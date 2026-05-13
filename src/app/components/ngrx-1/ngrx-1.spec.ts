import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { TestBed } from '@angular/core/testing';
import { Ngrx1 } from './ngrx-1';
import { reducers } from '../../state';
import { CounterEffects } from '../../state/counter.effects';

describe('Ngrx1', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngrx1],
      providers: [provideStore(reducers), provideEffects([CounterEffects])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Ngrx1);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
