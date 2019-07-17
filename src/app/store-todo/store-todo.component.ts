import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/store/store';
import { Observable } from '../../../node_modules/rxjs';
import { ITodo } from 'src/app/models/todo';
import { map } from 'rxjs/operators';

@Component({
  selector: 'store-todo',
  templateUrl: './store-todo.component.html',
  styleUrls: ['./store-todo.component.css']
})
export class StoreTodoComponent implements OnInit {

  @Input() store: Store;
  public isValid$: Observable<boolean>;
  public todos$: Observable<ITodo[]>;
  public activeCount$: Observable<number>;
  public completeCount$: Observable<number>;
  public newTodoName$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.todos$ = this.store.get(["todos"]);
    this.isValid$ = this.todos$
      .pipe(
        map((todos) => todos.filter(todo => !todo.complete).length <= 5)
      );
    this.activeCount$ = this.todos$
        .pipe(
          map((todos) => todos.filter(todo => !todo.complete).length)
        );
    this.completeCount$ = this.todos$
      .pipe(
        map((todos) => todos.filter(todo => todo.complete).length)
      );
  }

}
