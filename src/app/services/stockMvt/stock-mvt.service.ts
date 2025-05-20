import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstant } from 'src/app/constant/api-constants';
import { StockMvt, StockMvtToAdd } from 'src/app/interfaces/stock-mvt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockMvtService {

  private apiUrl = environment.apiUrl + ApiConstant.stockMvts; // Update with your backend URL
  private stockMvtUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  addStockMvt(supplier: StockMvtToAdd  ): Observable<any> {
      return this.http.post(this.apiUrl, supplier);
    }

    getStockMvt() : Observable<any> {
      return this.http.get(this.apiUrl);
    }

    updateStockMvt(id: any, stockMvt: any) {
      return this.http.put(`${this.apiUrl}/${id}`, stockMvt);
    }

    deleteStockMvt(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Notify that a supplier was updated
  notifyStockMvtUpdated(): void {
    this.stockMvtUpdatedSubject.next();
  }

  // Observable for components to subscribe to update notifications
  onStockMvtUpdated(): Observable<void> {
    return this.stockMvtUpdatedSubject.asObservable();
  }
}
