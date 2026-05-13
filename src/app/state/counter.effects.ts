import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CounterActions } from './counter.actions';

@Injectable()
export class CounterEffects {
  private readonly actions$ = inject(Actions);

  loadCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterActions.load),
      switchMap(() =>
        of(5).pipe(map((value) => CounterActions.loadSuccess({ value }))),
      ),
    ),
  );
}
