import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-a2',
  imports: [],
  templateUrl: './a2.html',
  styleUrl: './a2.scss',
})
export class A2 {
  isShown = signal(false);

  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}
