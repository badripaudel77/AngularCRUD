import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { TodoService } from '../services/todo.service';
import {LoggerService} from "../services/logger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:any = [];
  deletedMessage: string = '';

  // DI : Inject TodoService in TodoListComponent
  constructor(private todoService: TodoService,
              private loggerService: LoggerService,
              private router :Router) { }

   ngOnInit(): void {
     this.todos =  this.todoService.todos;
  }

  deleteTodo(id:number):void {
      let result = this.todoService.deleteTodo(id);
      if(result) {
        this.loggerService.log("Todo deleted successfully. ", "INFO");
      }
      this.todos = result;
  }

  filterTodos(searchQuery:string) {
     this.ngOnInit();
     let filteredTodos: any = this.todos.filter((todo:any) => {
        return todo.status.toLowerCase() === searchQuery;
     });
     this.todos = filteredTodos;
  }

  resetTodos() {
     this.loggerService.log("Refreshing data ", "INFO");
     this.ngOnInit();
  }

  getTodoDetails(todo: any) {
    // complex calculations
    // done, redirect to another component.
    this.todoService.setTodo(todo);
    this.router.navigate([`/todos/details/${todo.id}`]);
  }

}
