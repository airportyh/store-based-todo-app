import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/store/store';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'store-todo-item',
  templateUrl: './store-todo-item.component.html',
  styleUrls: ['./store-todo-item.component.css']
})
export class StoreTodoItemComponent implements OnInit {

  @Input() store: Store;
  @Input() index: number;
  public editing: boolean;
  public todo$: Observable<Todo>;

  constructor() { }

  ngOnInit() {
  }

}
