import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-item-details',
  templateUrl: './todo-item-details.component.html',
  styleUrls: ['./todo-item-details.component.css']
})
export class TodoItemDetailsComponent implements OnInit {
  todoItemId:number;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    //console.log(routeParams);
    this.todoItemId = Number(routeParams.get('todoId'));
  }

}
