import { TodoList } from "./todo.js";

const todo = new TodoList();
todo.addTask("Buy groceries");
todo.addTask("Walk the dog");
todo.markComplete(0);
console.log(todo.listTasks());
