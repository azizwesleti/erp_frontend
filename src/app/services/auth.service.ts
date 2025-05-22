import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users'; // Update with your backend URL
  private apiUrl1 = 'http://localhost:3000/api/auth';
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  public userRole$ = this.userRoleSubject.asObservable();

  private userNameSubject = new BehaviorSubject<string | null>(null);
  public userName$ = this.userNameSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(user: { email: string; password: string; role?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl1}/login`, user) ;
  }

    getUsers() : Observable<any> {
      return this.http.get(this.apiUrl);
    }

  setUserRole(role: string): void {
  this.userRoleSubject.next(role);
}

  getCurrentUserRole(): string | null {
    return this.userRoleSubject.value;
  }

  setUserName(name: string): void {
  this.userNameSubject.next(name);
}

  getCurrentUserName(): string | null {
    return this.userNameSubject.value;
  }
}