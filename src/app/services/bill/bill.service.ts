import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Bill, BillToAdd } from 'src/app/interfaces/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = 'http://localhost:3000/api/factures';
  private billUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  addBill(bill: BillToAdd): Observable<{ success: boolean; data?: Bill; error?: string }> {
    return this.http.post<{ success: boolean; data?: Bill; error?: string }>(this.apiUrl, bill);
  }

  getBills(type?: 'invoice' | 'quote'): Observable<{ success: boolean; data: Bill[]; error?: string }> {
    const url = type ? `${this.apiUrl}?type=${type}` : this.apiUrl;
    return this.http.get<{ success: boolean; data: Bill[]; error?: string }>(url);
  }

  getBillById(id: string): Observable<{ success: boolean; data?: Bill; error?: string }> {
    return this.http.get<{ success: boolean; data?: Bill; error?: string }>(`${this.apiUrl}/${id}`);
  }

  updateBill(id: string, bill: Partial<Bill>): Observable<{ success: boolean; data?: Bill; error?: string }> {
    return this.http.put<{ success: boolean; data?: Bill; error?: string }>(`${this.apiUrl}/${id}`, bill);
  }

  deleteBill(id: string): Observable<{ success: boolean; error?: string }> {
    return this.http.delete<{ success: boolean; error?: string }>(`${this.apiUrl}/${id}`);
  }

  notifyBillUpdated(): void {
    this.billUpdatedSubject.next();
  }

  onBillUpdated(): Observable<void> {
    return this.billUpdatedSubject.asObservable();
  }
}