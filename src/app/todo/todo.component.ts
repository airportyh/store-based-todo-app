import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/store/store';
import { TodoStore } from 'src/app/store/todo-store';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  store: TodoStore = new TodoStore();

  addTodo(): void {
    this.store.addTodo("Blah");
  }

  setTodoProp(i: number, event) {
    this.store.editTodo(i, event);
  }

}
