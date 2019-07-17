export class TodoStore extends Store {

  addTodo(newTodoName) {
    const todo = {
      name: newTodoName,
      complete: false
    };
    this.store.push(["todos"], todo);
    newTodoName = "";
  }
}
