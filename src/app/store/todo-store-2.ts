export class TodoStore extends Store{
  store: Store = new Store();

  addTodo(newTodoName) {
    const todo = {
      name: newTodoName,
      complete: false
    };
    this.store.push(["todos"], todo);
    newTodoName = "";
  }
}
