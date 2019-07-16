import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Todo {
  title: string;
  complete: boolean;
}

export class TodoStore {
  subject$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  map<T>(fn: (todos: Todo[]) => T): Observable<T> {
    return this.subject$.pipe(map(fn));
  }

  completedTodosCount(): Observable<number> {
    return this.map(
      todos => todos
        .filter(todo => todo.complete === true).length
    );
  }

  report(): Observable<string> {
    return this.map(todos => {
      if (todos.length === 0)
        return "<none>";
      return `Next todo: "${todos[0].title}". ` +
        `Progress: ${this.completedTodosCount}/${todos.length}`;
    });
  }

  addTodo(task: string): void {
    const todos = this.subject$.value;
		todos.push({
			title: task,
			complete: false
    });
    this.subject$.next(todos);
  }

  editTodo(idx: number, task: string): void {
    const todos = this.subject$.value;
    todos[idx].title = task;
    this.subject$.next(todos);
  }

}
