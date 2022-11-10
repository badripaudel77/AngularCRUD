import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  addTodo(todo:any, todos: any):[] {
      // add todo to the list
      todos.push(todo);
      return todos;
  }
   deleteTodo(id:number, todos : []) {
     let result =  todos.filter((todo:any) => id != todo.id)   
     console.log(`Todo with ID ${id} is deleted.`);
     return result;
  }

}
