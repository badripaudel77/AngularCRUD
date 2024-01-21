import {Action, createAction, props} from '@ngrx/store';

/**
 * Increment is the action name with type string as first parameter, and type of the payload
 * as second parameter. This means when dispatching this action, we can pass number type as second argument.
 * Notice : {value: number} is the typescript type.
 */
export const increment = createAction(
  '[NgRx Counter Component] Increment',
   props<{value: number}>()
);

export const decrement = createAction(
  '[NgRx Counter Component] Decrement',
        props<{value: number}>()
  );

export const reset = createAction('[NgRx Counter Component] Reset');
