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

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    const todo = {
      name: this.newTodoName,
      complete: false
    };
    this.todos.push(todo);
    this.newTodoName = "";
  }

  setComplete(i: number, complete) {
    const todo = this.todos[i];
    todo.complete = complete;
  }

}
