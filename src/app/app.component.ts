import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
// import {Task} from "../app/task.model";
import {CommonModule} from "@angular/common";
// import {OnInit} from "@angular/core";


export interface Task {
  id: number;
  name: string;
  completed: boolean;

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoListComponent,TodoComponent,TodoInputComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';





  // addTodo(todo: string) {
  //   this.todos.push({text: todo, done: false});
  // }

  // removeTodo(index: number) {
  //   this.todos.splice(index, 1);
  // }
  tasks: Task[] = [];
  nextId = 1;

  addTask(taskName: string) {
    const newTask: Task = { id: this.nextId++, name: taskName ,completed: false};
    this.tasks.push(newTask);
  }

  removeTodo(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index >= 0) {
      this.tasks.splice(index, 1);

    }
    // this.saveTasks();
  }
  toggleCompletion(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;

    }
    // this.saveTasks();
  }
}
  // ngOnInit() {
  //   this.loadTasks();
  // }
  // loadTasks() {
  //   const storedTasks = localStorage.getItem('tasks');
  //   // const storedNextId = localStorage.getItem('nextId');
  //   if (storedTasks) {
  //     this.tasks = JSON.parse(storedTasks);
  //   }
  //   // if (storedNextId) {
  //   //   this.nextId = parseInt(storedNextId);
  //   // }
  // }
  // saveTasks() {
  //   localStorage.setItem('tasks', JSON.stringify(this.tasks));
  // }


  // toggleCompletion(id: number) { this.nextId++; }

