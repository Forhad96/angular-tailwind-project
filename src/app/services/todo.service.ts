import {  Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItem: Array<Todo> = [
    {
      id: 1,
      userId: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      id: 2,
      userId: 1,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];
  constructor() {}
}
