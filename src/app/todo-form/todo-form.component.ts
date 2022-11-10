import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo :any = null;

  constructor() { }

  ngOnInit(): void {
  }

  addTodoItem(todo: any) {
    this.todo = todo;
  }

}
