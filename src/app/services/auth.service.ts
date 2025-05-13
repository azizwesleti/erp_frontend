import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users'; // Update with your backend URL
  private apiUrl1 = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  register(user: { email: string; password: string; role?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl1}/login`, user);
  }
}