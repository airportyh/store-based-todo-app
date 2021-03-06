import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'basic-todo',
  templateUrl: './basic-todo.component.html',
  styleUrls: ['./basic-todo.component.css']
})
export class BasicTodoComponent implements OnInit {
  newTodoName: string = "";
  todos: ITodo[] = [
    { name: "Water Plants", complete: false }
  ];
  isValid: boolean = true;
  activeCount: number;
  completeCount: number;

  constructor() { }

  ngOnInit() {
    this.updateCounts();
  }

  addTodo() {
    const todo = {
      name: this.newTodoName,
      complete: false
    };
    this.todos.push(todo);
    this.newTodoName = "";
    this.validate();
    this.updateCounts();
  }

  handleItemChange() {
    this.validate();
    this.updateCounts();
  }

  validate() {
    this.isValid = this.todos.filter(todo => !todo.complete).length <= 5;
  }

  updateCounts() {
    this.activeCount = this.todos.filter(todo => !todo.complete).length;
    this.completeCount = this.todos.filter(todo => todo.complete).length;
  }

}
