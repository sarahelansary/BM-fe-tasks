import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiKey = '40db937e0efa4a55a1b174600242707';
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=yes`;
    return this.http.get<any>(url);
  }
}
