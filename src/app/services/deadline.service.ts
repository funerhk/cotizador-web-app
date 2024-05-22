import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  private baseUrl = 'http://localhost:8081/deadline';

  constructor(private http: HttpClient) { }

  createDeadline(deadlineData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, deadlineData);
  }

  getAllDeadlines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }
}
