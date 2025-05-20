import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstant } from 'src/app/constant/api-constants';
import { PurchaseOrderToAdd } from 'src/app/interfaces/purchase-order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

private apiUrl = environment.apiUrl + ApiConstant.purchaseOrders; // Update with your backend URL
  private stockMvtUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  addPurchaseOrder(puchaseOrder: PurchaseOrderToAdd  ): Observable<any> {
      return this.http.post(this.apiUrl, puchaseOrder);
    }

    getPurchaseOrders() : Observable<any> {
      return this.http.get(this.apiUrl);
    }

    updatePurchaseOrder(id: any, puchaseOrder: any) {
      return this.http.put(`${this.apiUrl}/${id}`, puchaseOrder);
    }

    deletePurchaseOrder(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Notify that a supplier was updated
  notifyPurchaseOrderUpdated(): void {
    this.stockMvtUpdatedSubject.next();
  }

  // Observable for components to subscribe to update notifications
  onPurchaseOrderUpdated(): Observable<void> {
    return this.stockMvtUpdatedSubject.asObservable();
  }

}
