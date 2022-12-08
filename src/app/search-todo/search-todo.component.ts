import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {
  @Input() searchTodoTitle:string = '';
  @Input() todos:[]; // Input to this component from the parent component.
  @Output() searchStringEvent = new EventEmitter<string>(); // this component emits the property called searchStringEvent to the parent
  todoSearchString: string = '';
  /**
   * It can access the dom directly via local reference defined in the template any time, without submission etc. in the template as well.
   * Angular is continuously watching ...
   */

  @ViewChild('todoSearchInput') todoSearchInput :ElementRef;
  @ViewChild('myNgTodoForm') myNgTodoForm :NgForm;

  name: string = 'Badri';

  constructor() {
  }

  ngOnInit(): void { }

  /**
   * Emit search query value using searchStringEvent to the parent component.
   * searchStringEvent is decorated by @Output() decorator indicating that it outputs something to parent component.
   * searchStringEvent is used as (searchStringEvent) = "methodname..." in parent component where this component is used as
   * <app-search-todo (searchStringEvent) = "filterTodos($event)"></app-search-todo>
   */
  onClickSubmit(result:NgForm) {
    let searchString: string = result.value.todoSearchString.trim().toLowerCase();
    // let searchString: string = this.todoSearchInput.nativeElement.value.trim().toLowerCase(); // same as above
    this.searchStringEvent.emit(searchString);
    this.myNgTodoForm.reset();
  }

  setCriticalStatus() {
    let status: string = 'critical';
    this.todoSearchInput.nativeElement.value = status;
    this.todoSearchString = status;
  }
}
