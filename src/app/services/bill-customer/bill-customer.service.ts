import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstant } from 'src/app/constant/api-constants';
import { Bill, BillCustomer, BillCustomerToAdd, BillToAdd } from 'src/app/interfaces/bill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillCustomerService {
 private apiUrl = environment.apiUrl + ApiConstant.bills;
  private billUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  addBill(bill: BillCustomerToAdd): Observable<{ success: boolean; data?: BillCustomer; error?: string }> {
    return this.http.post<{ success: boolean; data?: BillCustomer; error?: string }>(this.apiUrl, bill);
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
