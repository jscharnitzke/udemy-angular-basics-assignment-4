import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tickEvent: EventEmitter<any> = new EventEmitter();
  private tickHandle;
  private count = 0;

  constructor() { }

  ngOnInit() {
  }

  public startGame() {
    this.tickHandle = setInterval(this.serverTick, 1000);
  }

  public stopGame() {
    clearInterval(this.tickHandle);
  }

  private serverTick() {
    this.count++;
    this.tickEvent.emit(this.count);
  }

}
