import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {
  @Input() searchTodoTitle:string = '';
  @Input() todos:[]; // Input to this component from the parent component.
  @Output() searchStringEvent = new EventEmitter<string>(); // this component emits the property called searchStringEvent to the parent

  name: string = 'Badri';
  isDisableSubmitButton: boolean = true;

  constructor() {
  }

  ngOnInit(): void { }

  onInputChange(result: any) {
    let searchString: string = result.value.todoSearchString.trim().toLowerCase();
     searchString.length <1 ? this.isDisableSubmitButton = true : this.isDisableSubmitButton = false;
  }
  /**
   * Emit search query value using searchStringEvent to the parent component.
   * searchStringEvent is decorated by @Output() decorator indicating that it outputs something to parent component.
   * searchStringEvent is used as (searchStringEvent) = "methodname..." in parent component where this component is used as
   * <app-search-todo (searchStringEvent) = "filterTodos($event)"></app-search-todo>
   */
  onClickSubmit(result:any) {
    let searchString: string = result.value.todoSearchString.trim().toLowerCase();
    this.searchStringEvent.emit(searchString);
  }
}
