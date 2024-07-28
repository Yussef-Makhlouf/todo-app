import { Component, Input , Output, EventEmitter, output } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

import { TodoInputComponent } from '../todo-input/todo-input.component';
// import { Task } from '../../task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../app.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent,TodoInputComponent,FormsModule,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

// [x: string]: any;
//   @Input ()todo : string[] = [];

@Input() tasks: Task[] = [];

@Output() removeTodo = new EventEmitter<number>();
@Output() toggleCompletion = new EventEmitter<number>();

onRemoveTodo(id: number) {
  const index = this.tasks.findIndex(task => task.id === id);
  if (index >= 0) {
    this.tasks.splice(index, 1);

  }
  // this.saveTasks();
}
onToggleCompletion(taskId: number) {
  const task = this.tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;

  }
}
}

// @Output() saveTasks = new EventEmitter<Task[]>();

// onRemoveTodo(id: number) {
//   this.removeTodo.emit(id);
// }

// onToggleCompletion(id: number) {
//   this.toggleCompletion.emit(id);
// }


