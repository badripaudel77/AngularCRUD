import { Component, OnInit } from '@angular/core';

import {select, Store} from '@ngrx/store';
import {Observable} from "rxjs";

import { increment, decrement, reset } from '../store/counter.actions';
import {UserModel} from "../models/User.model";
import {loadUsersFromAPI} from "../store/api.actions";

@Component({
  selector: 'app-ng-rx-counter',
  templateUrl: './ng-rx-counter.component.html',
  styleUrls: ['./ng-rx-counter.component.css']
})
export class NgRxCounterComponent implements OnInit {

  count$: Observable<number>;
  users$: Observable<UserModel[]>;

  byValue: number = 10;
  userList: UserModel[];
  error: string = '';
  isLoading$: Observable<boolean>;
  // count:number = 0;

  constructor(private store: Store<{counter: number}>,
               private apiStore: Store<{jsonPlaceholderAPI: UserModel[] }>) {
    this.count$ = this.store.select("counter");
    this.users$ = this.apiStore.select("jsonPlaceholderAPI");

    this.users$.subscribe(data => {
      console.log("API data is :::: ", data);
      this.userList = data;
    });

    //Since store.select('key') yields observable, it can be subscribed normally.
    // this.count$.subscribe(counter => {
    //   console.log("counter dd" , counter);
    //   //this.count = counter;
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

  /**
   * This is to illustrate API calling using ngrx dispatch and effects (side effects)
   */
  callApiUsingDispatch() {
    this.store.dispatch(loadUsersFromAPI());
  }

}
