import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { BasicTodoComponent } from './basic-todo/basic-todo.component';
import { BasicTodoItemComponent } from './basic-todo-item/basic-todo-item.component';
import { StoreTodoComponent } from './store-todo/store-todo.component';
import { StoreTodoItemComponent } from './store-todo-item/store-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    BasicTodoComponent,
    BasicTodoItemComponent,
    StoreTodoComponent,
    StoreTodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
