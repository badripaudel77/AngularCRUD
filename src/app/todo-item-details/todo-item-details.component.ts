import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo-item-details',
  templateUrl: './todo-item-details.component.html',
  styleUrls: ['./todo-item-details.component.css']
})
export class TodoItemDetailsComponent implements OnInit {
  todoItemId:number;
  todo: any = null;
  constructor(private route : ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    //console.log(routeParams);
    this.todoItemId = Number(routeParams.get('todoId'));
    this.todo = this.todoService.getSelectedTodo();
  }

}
