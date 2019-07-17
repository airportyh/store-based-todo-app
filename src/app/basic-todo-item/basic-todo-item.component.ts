import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/models/todo';
import { EventEmitter } from '../../../node_modules/protractor';

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
