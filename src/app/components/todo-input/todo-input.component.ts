import { Component ,  Output, EventEmitter } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [TodoComponent,TodoListComponent,FormsModule,CommonModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent  {
  // @Output() newTodo = new EventEmitter<string>();


  // @Input() addTodo: (todo: string) => void = () => {
  //   this.addTodo(this.todo);
  // };
  task: string = '';
  @Output() newTask = new EventEmitter<string>();

  addTask() {
    if (this.task.trim()) {
      this.newTask.emit(this.task);
      this.task = '';

    }

  }
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.task));
  }

}
