import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo-item-details',
  templateUrl: './todo-item-details.component.html',
  styleUrls: ['./todo-item-details.component.css']
})
export class TodoItemDetailsComponent implements OnInit {
  todoItemId:number;
  todo: any = null;
  isLoad: Boolean | null = null;
  flag : string | null = null;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private todoService: TodoService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.todoItemId = Number(routeParams.get('todoId'));
    this.todo = this.todoService.getSelectedTodo(this.todoItemId);
    this.isLoad = this.route.snapshot.queryParams['load'] === 'true' ? true : null;
    this.flag = this.route.snapshot.fragment ? this.route.snapshot.fragment : null;

    // listen to query params changed [if asynchronous] [optional for our case]
    this.route.params.subscribe((params: Params) => {
      this.todoItemId = Number(params['todoId']);
      this.todo = this.todoService.getSelectedTodo(this.todoItemId);
    });
  }

  /**
   * this.route.params returns the Observable which we can subscribe to.
   * Observable allow us to deal with asynchronous tasks without waiting to happen it for now.
   * By default, angular doesn't render the component if it is already in [unless changed from the url manually]
   * So, in this case Observable can be useful to listen to the changed URL from the same component even if the component has already been loaded.
   * No need to unsubscribe it manually as angular will do this for us once the component gets destroyed.
   * The reload method is just for the demo purpose.
   */

  reload() {
    this.router.navigate(['todos', 'details', 123]); // 123 is the first in todos, url : host/todos/details/123
    this.route.params.subscribe((updatedParams: Params) => {
       this.todoItemId = updatedParams['todoId'];
       this.todo = this.todoService.getSelectedTodo(this.todoItemId);
    });
  }

}
