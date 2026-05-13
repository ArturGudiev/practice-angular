import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

export const counterReducer = createReducer(
  0,
  on(CounterActions.increment, (state) => state + 1),
  on(CounterActions.loadSuccess, (_, { value }) => value),
  on(CounterActions.addAmount, (state, { amount }) => state + amount),
);
