import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BillToAdd } from 'src/app/interfaces/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private apiUrl = 'http://localhost:3000/api/factures'; // Update with your backend URL
  private billUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  addBill(bill: BillToAdd ): Observable<any> {
      return this.http.post(this.apiUrl, bill);
    }

    getBills() : Observable<any> {
      return this.http.get(this.apiUrl);
    }
    
    getBillById( id: string) : Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}` );
    }
    updateBill (id: any, bill: any) {
      return this.http.put(`${this.apiUrl}/${id}`, bill);
    }

    deleteBill(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Notify that a supplier was updated
  notifyBillUpdated(): void {
    this.billUpdatedSubject.next();
  }

  // Observable for components to subscribe to update notifications
  onBillUpdated(): Observable<void> {
    return this.billUpdatedSubject.asObservable();
  }}
