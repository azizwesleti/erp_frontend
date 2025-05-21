import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstant } from 'src/app/constant/api-constants';
import { PurchaseClientToAdd } from 'src/app/interfaces/purchase-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseClientService {

private apiUrl = environment.apiUrl + ApiConstant.purchaseClient; // Update with your backend URL
  private stockMvtUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  addPurchaseClient(puchaseclient: PurchaseClientToAdd  ): Observable<any> {
      return this.http.post(this.apiUrl, puchaseclient);
    }

    getPurchaseClient() : Observable<any> {
      return this.http.get(this.apiUrl);
    }

    updatePurchaseClient(id: any, puchaseclient: any) {
      return this.http.put(`${this.apiUrl}/${id}`, puchaseclient);
    }

    deletePurchaseClient(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Notify that a supplier was updated
  notifyPurchaseClientUpdated(): void {
    this.stockMvtUpdatedSubject.next();
  }

  // Observable for components to subscribe to update notifications
  onPurchaseClientUpdated(): Observable<void> {
    return this.stockMvtUpdatedSubject.asObservable();
  }

}
