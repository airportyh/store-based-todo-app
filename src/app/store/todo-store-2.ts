export class TodoStore {
  store: Store = new Store();

  addTodo(newTodoName) {
    const todo = {
      name: this.newTodoName,
      complete: false
    };
    this.store.push(["todos"], todo);
    this.newTodoName = "";
  }
}
