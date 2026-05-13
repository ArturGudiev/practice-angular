import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    Increment: emptyProps(),
    Load: emptyProps(),
    'Load Success': props<{ value: number }>(),
    AddAmount: props<{ amount: number }>(),
  },
});
