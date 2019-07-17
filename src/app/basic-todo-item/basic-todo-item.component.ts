import { Component, OnInit, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'basic-todo-item',
  templateUrl: './basic-todo-item.component.html',
  styleUrls: ['./basic-todo-item.component.css']
})
export class BasicTodoItemComponent implements OnInit {

  @Input() todo: ITodo;
  @Output() change: EventEmitter<ITodo>;

  constructor() { }

  ngOnInit() {
  }

}
