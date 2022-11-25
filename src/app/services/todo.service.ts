import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

   deleteTodo(id:number, todos : []) {
     let result =  todos.filter((todo:any) => id != todo.id)
     return result;
  }

}
