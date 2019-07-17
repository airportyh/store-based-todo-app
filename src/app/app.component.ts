import { Component } from '@angular/core';
import { Store } from 'src/app/store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-based-todo';

  todoStore = new Store({
    newTodoName: "",
    todos: [{ name: "Water plants", complete: false }]
  });
}
