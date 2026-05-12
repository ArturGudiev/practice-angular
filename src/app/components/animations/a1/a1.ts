import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-a1',
  imports: [],
  templateUrl: './a1.html',
  styleUrl: './a1.scss',
})
export class A1 {
  isShown = signal(false);

  toggle() {
    this.isShown.update((isShown) => !isShown);
  }

}
