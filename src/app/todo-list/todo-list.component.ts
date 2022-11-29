import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:any = [];
  deletedMessage: string = '';

    // Dependency injection . Inject TodoService
   constructor(private todoService: TodoService) {

   }

   ngOnInit(): void {
    // update state as soon as item is selected and added to localstorage
    this.todos = [
      {id: 123, name: 'Orange', dateCreated : new Date().getFullYear(), status: 'good'},
      {id: 124,name: 'Apple', dateCreated : new Date().getFullYear(), status: 'good'},
      {id: 125, name: 'Banana', dateCreated : new Date().getFullYear(), status: 'critical' },
      {id: 126, name: 'Avocado', dateCreated : new Date().getFullYear(), status: 'good'},
      {id: 127, name: 'Guava', dateCreated : new Date().getFullYear(), status: 'bad'},
      {id: 128, name: 'Coconut', dateCreated : new Date().getFullYear(), status: 'critical'}
    ]
  }

  deleteTodo(id:number):void {
      let result = this.todoService.deleteTodo(id, this.todos);
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
     this.ngOnInit();
  }

}
