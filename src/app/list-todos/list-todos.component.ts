import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn to Dance', true, new Date()),
    new Todo(2, 'Learn to Java', false, new Date()),
    new Todo(3, 'Visit Peru', false, new Date()),
  ]
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }

}
