import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-a3-leave-answer',
  imports: [],
  templateUrl: './a3-leave-answer.html',
  styleUrl: './a3-leave-answer.scss',
})
export class A3LeaveAnswer {
  isShown = signal(false);

  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}
