import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-a3-leave',
  imports: [],
  templateUrl: './a3-leave.html',
  styleUrl: './a3-leave.scss',
})
export class A3Leave {
  isShown = signal(false);

  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}
