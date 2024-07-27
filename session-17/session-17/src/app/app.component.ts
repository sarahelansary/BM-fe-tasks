import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
export interface Task {
  title: string;
  description: string;
  detailsVisible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, TestComponent],
})
export class AppComponent {
  title = 'Task Manager';
  inputTitle: string = '';
  inputDescription: string = '';
  tasks: Task[] = [];
  editingIndex: number | null = null;

  addItem() {
    if (this.editingIndex === null) {
      // Add new task
      if (this.inputTitle.trim() && this.inputDescription.trim()) {
        this.tasks.push({
          title: this.inputTitle.trim(),
          description: this.inputDescription.trim(),
          detailsVisible: false,
        });
        this.inputTitle = '';
        this.inputDescription = '';
      }
    } else {
      // Edit existing task
      this.tasks[this.editingIndex] = {
        title: this.inputTitle,
        description: this.inputDescription,
        detailsVisible: this.tasks[this.editingIndex].detailsVisible,
      };
      this.inputTitle = '';
      this.inputDescription = '';
      this.editingIndex = null;
    }
  }

  onTaskEdited(event: { index: number; task: Task }) {
    this.editingIndex = event.index;
    this.inputTitle = event.task.title;
    this.inputDescription = event.task.description;
  }
}
