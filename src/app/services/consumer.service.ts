import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '../shared/config/app.config';
@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  constructor(private http: HttpClient) {}

  getConsumers(tp_id) {
    return this.http.post(endpoint + '/consumers', { tp_id: tp_id });
  }
}
