import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '../shared/config/app.config';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  constructor(private http: HttpClient) {}

  getTopics() {
    return this.http.get('http://192.168.0.2:9200');
  }
}
