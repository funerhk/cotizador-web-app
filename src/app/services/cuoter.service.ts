import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuoterService {
  private baseUrl = 'http://localhost:8082/quoter';

  constructor(private http: HttpClient) { }

  calculateQuoter(quoterData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/calculate`, quoterData);
  }
}
