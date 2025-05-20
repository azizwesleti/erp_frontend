import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstant } from 'src/app/constant/api-constants';
import { Payment, PaymentToAdd } from 'src/app/interfaces/payment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

private apiUrl = environment.apiUrl + ApiConstant.payments; // Update with your backend URL
  private billUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  addPayment(payment: PaymentToAdd): Observable<any> {
  return this.http.post<any>(this.apiUrl, payment, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}


    getPayments() : Observable<any> {
      return this.http.get(this.apiUrl);
    }
    
    // Get single payment by ID
  getPaymentById(id: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${id}`);
  }

  // Update a payment
  updatePayment(id: string, payment: Partial<Payment>): Observable<Payment> {
    return this.http.put<Payment>(`${this.apiUrl}/${id}`, payment, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Delete a payment
  deletePayment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
    // Notify that a supplier was updated
  notifyPaymentUpdated(): void {
    this.billUpdatedSubject.next();
  }

  // Observable for components to subscribe to update notifications
  onPaymentUpdated(): Observable<void> {
    return this.billUpdatedSubject.asObservable();
  }}
