import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'basic-todo-item',
  templateUrl: './basic-todo-item.component.html',
  styleUrls: ['./basic-todo-item.component.css']
})
export class BasicTodoItemComponent implements OnInit {

  @Input() todo: ITodo;
  @Output() change: EventEmitter<ITodo> = new EventEmitter();
  private editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setComplete(complete: boolean) {
    this.todo.complete = complete;
    this.change.emit(this.todo);
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  setName(name: string) {
    this.todo.name = name;
    this.change.emit(this.todo);
  }
}
