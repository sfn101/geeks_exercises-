export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, complete: false });
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].complete = true;
    }
  }

  listTasks() {
    return this.tasks;
  }
}