import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {Observable} from "rxjs";

import { increment, decrement, reset } from '../store/counter.actions';

@Component({
  selector: 'app-ng-rx-counter',
  templateUrl: './ng-rx-counter.component.html',
  styleUrls: ['./ng-rx-counter.component.css']
})
export class NgRxCounterComponent implements OnInit {

  count$: Observable<number>;
  byValue: number = 10;
  // count:number = 0;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = this.store.select("counter");

    // Since store.select('key') yields observable, it can be subscribed normally.
    // this.count$.subscribe(counter => {
    //   this.count = counter;
    // });
  }


  ngOnInit(): void {
  }

  incrementCount() {
    this.store.dispatch(increment({ value: this.byValue }));
  }

  decrementCount() {
    this.store.dispatch(decrement({ value: this.byValue }));
  }

  resetCount() {
    // this.count = 0;
    this.store.dispatch(reset());
  }

}
