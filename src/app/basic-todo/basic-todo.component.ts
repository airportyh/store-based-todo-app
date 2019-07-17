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

  handleItemChange() {
    console.log("handle item change");
    this.validate();
    console.log("isValid", this.isValid);
  }

  validate() {
    this.isValid = this.todos.filter(todo => !todo.complete).length <= 5;
  }

}
