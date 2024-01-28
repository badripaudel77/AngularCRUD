import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';

import {increment, decrement, reset, set} from './counter.actions';

const initialState = 10; // initial counter value

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
     // do something with this state
    return state + action.value;
  }),
  on(decrement, (state, action) => state - action.value),
  on(reset, (state) => initialState),
  // in action.value > the latest value polled from the localstorage.
  on(set, (state, action) => action.value)
);

/**
 * Another way of creating reducer, without using
 */

export function counterReducer101( state = initialState, action: any) {
  // do some logical calculations
  console.log("action to counter reducer >>> ", state, " = ", action)
  if(action.type === '[NgRx Counter Component] Increment') {
      return state + action.value;
  }
  else if(action.type === '[NgRx Counter Component] Decrement') {
      return state - action.value;
  }
  return initialState;
}

