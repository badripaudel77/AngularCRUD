import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:any = [];
  placeholderTodos:any = []
  deletedMessage: string = '';

  constructor(private todoService: TodoService) {
    // Dependency injection . Inject TodoService
   }
  ngOnInit(): void {
    // update state as soon as item is selected and added to localstorage 
    this.placeholderTodos = [
      {id: 123, name: 'Orange', dateCreated : new Date().getFullYear()},
      {id: 124,name: 'Apple', dateCreated : new Date().getFullYear()},
      {id: 125, name: 'Banana', dateCreated : new Date().getFullYear()}
    ]   
    this.todos = localStorage.getItem("todoList") ? localStorage.getItem('todoList') : this.placeholderTodos
  }

  deleteTodo(id:number):void {
    this.deletedMessage = "Todo Item with ID " + id + " deleted successfully.";
    let result = this.todoService.deleteTodo(id, this.todos);
    this.todos = result;    
  }

}
