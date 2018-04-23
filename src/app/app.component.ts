import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  odds: number[] = [];
  evens: number[] = [];

  onTimerTick(count: number) {
    if (count % 2 === 0 ) {
      this.evens.push(count);
    } else {
      this.odds.push(count);
    }
  }
}
