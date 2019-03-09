import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '../shared/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  saveSettings(interval) {
    return this.http.post(endpoint + '/savesettings', { interval: interval });
  }
}
