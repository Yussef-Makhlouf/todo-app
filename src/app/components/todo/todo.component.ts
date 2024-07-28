import { Component } from '@angular/core';
import { TodoInputComponent } from "../todo-input/todo-input.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent, FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

tasks: string[] = [];

addTask(task: string) {
  this.tasks.push(task);
}
}
