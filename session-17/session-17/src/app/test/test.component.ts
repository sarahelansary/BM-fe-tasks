import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../app.component'; // Import the Task interface
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TestComponent {
  @Input() tasks: Task[] = [];

  toggleDetails(index: number) {
    this.tasks[index].detailsVisible = !this.tasks[index].detailsVisible;
  }
  delete(index: number) {
    this.tasks.splice(index, 1);
  }
  @Output() taskEdited = new EventEmitter<{ index: number; task: Task }>();

  editTask(index: number) {
    const editedTask: Task = {
      title: this.tasks[index].title,
      description: this.tasks[index].description,
      detailsVisible: this.tasks[index].detailsVisible,
    };
    this.taskEdited.emit({ index, task: editedTask });
  }
}
