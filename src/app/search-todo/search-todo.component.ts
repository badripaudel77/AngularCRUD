import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {
  statuses: string[] = ['good', 'bad', 'critical'];

  @Input() searchTodoTitle:string = '';
  @Input() todos:[]; // Input to this component from the parent component.

  name: string = 'Badri';
  isDisableSubmitButton: boolean = true;
  constructor() {
    setTimeout(() => this.isDisableSubmitButton = false, 3000);
  }

  ngOnInit(): void { }

  onClickSubmit(result:any) {
    let searchString: string = result.value.todoSearchString.trim().toLowerCase();
    let filteredTodos: any = this.todos.filter((todo:any) => {
        return todo.status.toLowerCase() === searchString;
    });
    console.log("result>> ", result.value, this.todos, filteredTodos);
  }
}
