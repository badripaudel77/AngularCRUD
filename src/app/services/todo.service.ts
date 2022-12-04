import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService{

  todos : any = [];
  constructor() {
    this.todos = [
      {id: 123, name: 'Orange', dateCreated : new Date().getFullYear(), status: 'good'},
      {id: 124,name: 'Apple', dateCreated : new Date().getFullYear(), status: 'good'},
      {id: 125, name: 'Banana', dateCreated : new Date().getFullYear(), status: 'critical' },
      {id: 126, name: 'Avocado', dateCreated : new Date().getFullYear(), status: 'good'},
      {id: 127, name: 'Guava', dateCreated : new Date().getFullYear(), status: 'bad'},
      {id: 128, name: 'Coconut', dateCreated : new Date().getFullYear(), status: 'critical'}
    ]
  }

   deleteTodo(id:number):any {
     let result =  this.todos.filter((todo:any) => id != todo.id)
     this.todos = result;
     return result;
  }

}
