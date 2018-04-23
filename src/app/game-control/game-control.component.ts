import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tickEvent = new EventEmitter<number>();
  private tickHandle;
  private count = 0;

  constructor() { }

  ngOnInit() {
  }

  public onStart() {
    this.tickHandle = setInterval(() => {
      this.count++;
      this.tickEvent.emit(this.count);
    }, 1000);
  }

  public onStop() {
    clearInterval(this.tickHandle);
  }

}
