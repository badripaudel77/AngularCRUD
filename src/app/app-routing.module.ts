import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutDeveloperComponent } from './about-developer/about-developer.component';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoItemDetailsComponent} from "./todo-item-details/todo-item-details.component";

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: 'todos/details/:todoId', component: TodoItemDetailsComponent, pathMatch: 'full' },
  { path: 'fetch/users', component: FetchUserComponent, pathMatch: 'prefix' },
  { path: 'about/app', component: AboutAppComponent, pathMatch: 'full' },
  { path: 'about/developer', component: AboutDeveloperComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
