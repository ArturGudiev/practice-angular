import type { ActionReducerMap } from '@ngrx/store';
import type { AppState } from './app.state';
import { counterReducer } from './counter.reducer';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};

export type { AppState } from './app.state';
export { CounterActions } from './counter.actions';
export { counterReducer } from './counter.reducer';
export { selectCounter } from './counter.selectors';
export { CounterEffects } from './counter.effects';
