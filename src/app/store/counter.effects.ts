/**
 * Effects (ngrx)
 */
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {decrement, increment, init, reset, set} from "./counter.actions";
import {switchMap, tap, withLatestFrom, of } from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

@Injectable()
export class CounterEffects {
  /**
   * Once we register this ngrx effect in app.module.ts file,
   * for the given action types (here, increment & decrement), this side effect will be invoked.
   */

  /**
   * Whenever this init is dispatched, it will take the latest stored value from the local storage.
   * And dispatch the new action called set with value required as payload for this action.
   * Since this loadCount effect yields new action object [set()], we don't need { dispatch : false} config because this is default expected by ngrx.
   */

  loadCount = createEffect( () =>
      this.actions$.pipe(
        // listen for init action
        ofType(init), // this will be dispatched from somewhere in our app
        // Now we want to get value from the localstorage and dispatch another action called set and update our counter value
        // we have to use switchMap. It allows us to switch to another observable chain.
        // eg : (ofType -> one observable, switch to another observable,
        switchMap(() => {
          const counterValue = localStorage.getItem("counter");
          // console.log("load count >> ", counterValue);
          if(counterValue) {
              // console.log("of set , ", of(set({ value: +counterValue})));
              return of(set({ value: +counterValue}))
          }
          return of(set({ value: 0}))
        })
   ));
  /**
   saveCount = createEffect(() =>
   this.actions$
   .pipe(
  ofType(increment, decrement), // when increment or decrement are dispatched.
  tap((action) => {
  console.log("Effects called : " , action);
  localStorage.setItem("counter", action.value.toString());
  // We can dispatch other actions too.
  //this.store.dispatch(increment({value: 100}));
})
),
{ dispatch : false } // when the effects don't dispatch other actions, give this config.
);
*/

  /**
   * Once we register this ngrx effect in app.module.ts file,
   * for the given action types (here, increment & decrement), this side effect will be invoked.
   */
  saveCount = createEffect(() =>
      this.actions$
        .pipe(
          ofType(increment, decrement), // when increment or decrement are dispatched.
          withLatestFrom(this.store.select("counter")), // withLatestFrom() gives us the latest value from the store when requested.
          // but now it gives array of action and data [just destructured it]
          tap(([action, data]) => {
            console.log("This effect was called for the action : ", action, "and received the data : " , data);
            // localStorage.setItem("counter", action.value.toString());
            localStorage.setItem("counter", data.toString());
            // We can dispatch other actions too.
            //this.store.dispatch(increment({value: 100}));
          })
        ),
    { dispatch : false } // when the effects don't dispatch other actions, give this config.
  );
  /**
  constructor(private actions$: Actions, private store: Store) {

  }
   */

  /**
   * When user resets the values (by clicking reset btn), updates the localstorage value
   * We could add this in the saveCount as well but this has been separated for demonstration.
   */
  updateLocalstorageValueOnReset = createEffect(() =>
    this.actions$.pipe(
      ofType(reset),
      tap((action) => localStorage.setItem("counter", "10"))
    ),
    // This effect doesn't dispatch other action (i.e. doesn't return another action object) so give this config.
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<{counter: number}>) {
  }
}
