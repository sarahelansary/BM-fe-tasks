import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataService } from './shared/services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-app';
  city: string = '';
  weather: any = null;

  constructor(private weatherService: DataService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weather = data;
      },
      error: (error) => {
        console.error('Error fetching weather data', error);
      },
    });
  }
}
