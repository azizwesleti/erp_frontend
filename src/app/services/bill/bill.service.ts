import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstant } from 'src/app/constant/api-constants';
import { Bill, BillToAdd } from 'src/app/interfaces/bill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = environment.apiUrl + ApiConstant.bills;
  private billUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  addBill(bill: BillToAdd): Observable<{ success: boolean; data?: Bill; error?: string }> {
    return this.http.post<{ success: boolean; data?: Bill; error?: string }>(this.apiUrl, bill);
  }

  getBills(
  page: number = 1,
  limit: number = 10,
  search?: string
): Observable<{
  success: boolean;
  data: Bill[];
  pagination: { total: number; page: number; pages: number };
  error?: string;
}> {
  let params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString());

  if (search) {
    params = params.set('search', search);
  }

  return this.http.get<{
    success: boolean;
    data: Bill[];
    pagination: { total: number; page: number; pages: number };
    error?: string;
  }>(this.apiUrl, { params });
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