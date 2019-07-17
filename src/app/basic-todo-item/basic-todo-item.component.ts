import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-todo-item',
  templateUrl: './basic-todo-item.component.html',
  styleUrls: ['./basic-todo-item.component.css']
})
export class BasicTodoItemComponent implements OnInit {

  @Input() todo: ITodo;

  constructor() { }

  ngOnInit() {
  }

}
