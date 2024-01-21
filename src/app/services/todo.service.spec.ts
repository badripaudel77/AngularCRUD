import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    console.log("Before each called >>>");
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    console.log("should be created >>> ");
    expect(service).toBeTruthy();
  });

  it('should return a correct value', () => {
    console.log("hello")
  });

});
