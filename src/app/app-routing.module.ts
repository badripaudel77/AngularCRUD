import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutDeveloperComponent } from './about-developer/about-developer.component';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoItemDetailsComponent} from "./todo-item-details/todo-item-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./guards/auth-guard";
import {DeveloperAddressComponent} from "./about-developer/developer-address/developer-address.component";

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  {
    path: 'todos/details/:todoId',
    component: TodoItemDetailsComponent,
    canActivate: [AuthGuard], // auth guard will act as intercepting and logic inside of this service will decide what to do.
    pathMatch: 'full'
  },
  { path: 'fetch/users', component: FetchUserComponent, pathMatch: 'prefix' },
  { path: 'about/app', component: AboutAppComponent, pathMatch: 'full' },
  {
    path: 'about/developer', component: AboutDeveloperComponent,
    children: [
      {
        path: 'address', // child route : This means /about/developer/address
        component: DeveloperAddressComponent,
        //title: "Title for this component if any"
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent } // !important ::: must be the last one.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
