import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/store/store';
import { Observable } from '../../../node_modules/rxjs';
import { ITodo } from 'src/app/models/todo';
import { map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'store-todo',
  templateUrl: './store-todo.component.html',
  styleUrls: ['./store-todo.component.css']
})
export class StoreTodoComponent implements OnInit {

  @Input() store: Store;
  private isValid$: Observable<boolean>;
  private todos$: Observable<ITodo[]>;

  constructor() { }

  ngOnInit() {
    this.isValid$ = this.store.get(["todos"])
      .pipe(
        map((todos) => todos.filter(todo => !todo.complete).length <= 5)
      )
    this.todos$ = this.store.get(["todos"]);
  }

}
