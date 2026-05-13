import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterActions, selectCounter } from '../../state';

@Component({
  selector: 'app-ngrx-1',
  imports: [AsyncPipe],
  templateUrl: './ngrx-1.html',
  styleUrl: './ngrx-1.scss',
})
export class Ngrx1 {
  private readonly store = inject(Store);

  readonly counter$ = this.store.select(selectCounter);

  constructor() {
    this.store.dispatch(CounterActions.load());
  }

  increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  addAmount(amount: number): void {
    this.store.dispatch(CounterActions.addAmount({ amount }));
  }
}
