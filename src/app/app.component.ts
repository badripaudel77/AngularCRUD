import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {init} from "./store/counter.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'My Basic Angular App';

  constructor(private ngrxStore: Store) {
  }
  /**
   * This init method dispatches init() action which ultimately returns another action.
   */
  ngOnInit() : void {
    console.log("Init() will be dispatched.")
    this.ngrxStore.dispatch(init());
  }
}
