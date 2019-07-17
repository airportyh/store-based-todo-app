import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store-todo-item',
  templateUrl: './store-todo-item.component.html',
  styleUrls: ['./store-todo-item.component.css']
})
export class StoreTodoItemComponent implements OnInit {

  @Input() store: Store

  constructor() { }

  ngOnInit() {
  }

}
