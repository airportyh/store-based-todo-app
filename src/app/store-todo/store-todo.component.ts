import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/store/store';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'store-todo',
  templateUrl: './store-todo.component.html',
  styleUrls: ['./store-todo.component.css']
})
export class StoreTodoComponent implements OnInit {

  @Input() store: Store;
  private isValid$: Observable<

  constructor() { }

  ngOnInit() {
  }

}
