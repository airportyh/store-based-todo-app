import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  setComplete(complete: boolean) {
    this.todo.complete = complete;
  }
}
