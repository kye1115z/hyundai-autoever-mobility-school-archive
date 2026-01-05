const todoList = {
  todos: [],
  nextId: 1,

  addTodo(text) {
    const todo = {
      id: this.nextId,
      text,
      completed: false,
    };
    this.todos.push(todo);
    this.nextId++;
  },

  getTodos() {
    for (const todo of this.todos) {
      const status = todo.completed ? "[✓]" : "[ ]";
      console.log(`${todo.id}. ${status} ${todo.text}`);
    }
    console.log("-----");
  },

  getCompletedTodos() {
    const completed = [];

    for (const todo of this.todos) {
      todo.completed ? completed.push(todo) : null;
    }

    for (const todo of completed) {
      console.log(`${todo.id}. [✓] ${todo.text}`);
    }
    console.log("-----");
  },

  getIncompleteTodos() {
    const incomplete = [];
    for (const todo of this.todos) {
      !todo.completed ? incomplete.push(todo) : null;
    }

    for (const todo of incomplete) {
      console.log(`${todo.id}. [ ] ${todo.text}`);
    }
    console.log("-----");
  },

  completeTodo(id) {
    for (const todo of this.todos) {
      if (id === todo.id) todo.completed = true;
      return;
    }
  },

  editTodo(id, newText) {
    for (const todo of this.todos) {
      const oldText = todo.text;
      if (id === todo.id) todo.text = newText;
      console.log(`"${oldText}" -> "${newText}"로 수정되었습니다.`);
      return;
    }
  },

  deleteTodo(id) {
    let index = 0;
    for (const todo of this.todos) {
      if (id === todo.id) index = this.todos.indexOf(todo);
    }
    this.todos.splice(index, 1);
    return;
  },

  getStatus() {
    let total = this.todos.length;
    let completed = 0;
    for (const todo of this.todos) {
      if (todo.completed) completed++;
    }
    console.log(
      `전체: ${total}, 완료: ${completed}, 미완료: ${total - completed}`
    );
  },

  clearAllTodos() {
    this.todos = [];
  },
};

todoList.addTodo("JavaScript 공부하기");
todoList.addTodo("운동하기");
todoList.addTodo("책 읽기");

todoList.getTodos();

todoList.completeTodo(1);
todoList.getTodos();

todoList.deleteTodo(2);
todoList.getTodos();

todoList.editTodo(1, "잠자기");
todoList.getCompletedTodos();
todoList.getIncompleteTodos();
todoList.clearAllTodos();
todoList.getTodos();
