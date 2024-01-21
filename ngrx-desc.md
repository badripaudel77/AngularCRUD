### This is note file for ngrx 
 "Will contain some information and notes about the ngrx together with angular application."

##### Official docs for ngrx : https://ngrx.io/
##### Concepts : https://ngrx.io/guide/store
### Install NgRX
```ng add @ngrx/store``` , this will give some entry configuration to the application.

## Components of NgRx

1. Actions : Actions are the events that occur within the application. For instance, when users click on the login button, it can be taken as an action, like login action. 

2. Reducers : These are the pure functions responsible for transforming the state. It takes current state as the parameter, updates the store and return the new state.

3. Store : Central part of the `ngrx` app that holds all the state of entire application. It can only be changed by dispatching application.


Steps : 
- Create the action by using createAction from ngrx. Define the type of the action as : [description] is just for convention 
  ```typescript
      export const increment = createAction('[NgRx Counter Component] Increment');
```
- Create reducers whose function is to get existing state and modify based on the dispatched state.
  createReducer can be imported from ngrx.
- Register the created reducers in the app.module.ts file as shown in example below. This is essentially same
  as providing to the application.
  ```StoreModule.forRoot({ counter : counterReducer }, {})```
- Now store can be injected in the component since we're providing it from the app.module.ts.
- To inject it (Store) in the component, do similar to how services are injected but this time Store from ngrx. 
- To select the data from the store managed by particular reducer (which has been provided to the app), use the follwoing syntax : 
- ``` this.store.select("reducer_name_key"); ``` eg : ``` this.store.select("counter"); ```
- Full example of selecting values : 
```typescript
     constructor(private store: Store<{counter: number}>) {
           this.count$ = this.store.select("counter");
     }
```
- Since select yields Observable, it has been stored in count$ observable , $ is just a convention.
- Because it is an observable, it can be subscribed just like any others : 
```
 this.count$.subscribe(counter => {
      this.countValue = counter;
    });
```

- But we can use Angular's async pipe directly which gets updated automatically in the view as : 
```typescript
   {{ count$ | async }} // since count$ yields number observable.
```
- To call reducers, we dispatch an action using ```on``` available in ngrx.
- We import to the reducer where the action will be dispatched (usually from the UI like btn click or some parts of the code )
```typescript
     on(increment, (state) => {
     // do something with this state
     return state + 1;
  })
```

Full eg: 
```typescript
  export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    // do something with this state
    return state + 1;
  })
);
```

- To dispatch an action from UI / Or other code, use the injected Store from the ngrx using 
```dispatch``` method and pass the type of the action you want to dispatch as : 

```typescript
    // Make sure to execute the action inside of the dispatch function.
    this.store.dispatch((increment()))
```

- To pass the data (payload) to the along with action while dispatching, we can configure action to accept
  payload as follows, this is telling that number can be passed as payload while dispatching increment action.
```typescript
  export const increment = createAction(
  '[NgRx Counter Component] Increment',
  props<{value: number}>()
);
```

### Effects in ngrx:

  
