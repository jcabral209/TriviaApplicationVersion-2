import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Config, CountdownComponent } from 'ngx-countdown';
@Component({
  selector: 'app-timer',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  config: Config;
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  constructor() { }

  ngOnInit() {
    this.config = {
      leftTime: 1000 * 10,
      // ="{leftTime: 30}" (start)="onStart()" (finished)="onFinished()" (notify)="onNotify($event)"
    };
  }
  resetTimer() {
    this.counter.restart();
    this.counter.stop();
    this.counter.pause();
    this.counter.resume();
  }
  onStart() {
    // Do something
  }
  onNotify($event) {
    // Do something
  }
  repaint() {
    const me: any = this;
    let content: string;

    me.hands.forEach((hand: any) => {
      if (hand.lastValue !== hand.value) {
        content = '';
        const cur = me.toDigitals(hand.value + 1, hand.bits).join('');
        const  next = me.toDigitals(hand.value, hand.bits).join('');

        hand.node.innerHTML = `
          <span class="count curr top">${cur}</span>
          <span class="count next top">${next}</span>
          <span class="count next bottom">${next}</span>
          <span class="count curr bottom">${cur}</span>
        `;
        hand.node.parentElement.className = 'time';
        setTimeout(() => {
          hand.node.parentElement.className = 'time flip';
        });
      }
    });
  }
}
