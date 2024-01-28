import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutDeveloperComponent } from './about-developer/about-developer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SearchTodoComponent} from "./search-todo/search-todo.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoItemDetailsComponent } from './todo-item-details/todo-item-details.component';
import {ButtonColorDirective} from "./directives/button-color.directive";
import {TodoService} from "./services/todo.service";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard, AuthService} from "./guards/auth-guard";
import { DeveloperAddressComponent } from './about-developer/developer-address/developer-address.component';
import {DemoInterceptorService} from "./demo-interceptor.service";
import { NgRxCounterComponent } from './ng-rx-counter/ng-rx-counter.component';

import  { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import {CounterEffects} from "./store/counter.effects";
import {apiDataReducer} from "./store/api.reducer";
import {ApiEffects} from "./store/api.effects";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavBarComponent,
    FetchUserComponent,
    AboutAppComponent,
    AboutDeveloperComponent,
    PageNotFoundComponent,
    SearchTodoComponent,
    TodoItemDetailsComponent,
    ButtonColorDirective,
    DeveloperAddressComponent,
    NgRxCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // include for ngrx/store. Register all the reducers here.
    StoreModule.forRoot({ counter : counterReducer, jsonPlaceholderAPI: apiDataReducer }, {}),
    // Include for ngrx/effect, register all the ngrx effects here.
    EffectsModule.forRoot([CounterEffects, ApiEffects])
  ],
  // Inject at the possible higher component [ or in module file], single instance of TodoService will be shared.
  providers: [TodoService, AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: DemoInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
