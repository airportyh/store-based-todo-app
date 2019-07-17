import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/store/store';
import { Observable } from '../../../node_modules/rxjs';
import { ITodo } from '../models/todo';

@Component({
  selector: 'store-todo-item',
  templateUrl: './store-todo-item.component.html',
  styleUrls: ['./store-todo-item.component.css']
})
export class StoreTodoItemComponent implements OnInit {

  @Input() store: Store;
  @Input() index: number;
  public editing: boolean;
  public todo$: Observable<ITodo>;

  constructor() { }

  ngOnInit() {
    this.todo$ = this.store.get([this.index]);
    console.log("this worked", this.index);
    this.todo$.subscribe((todo) => console.log(todo));
  }

}
