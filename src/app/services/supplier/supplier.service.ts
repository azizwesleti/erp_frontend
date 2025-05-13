import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Supplier, SupplierToAdd } from 'src/app/interfaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
 private apiUrl = 'http://localhost:3000/api/fournisseurs'; // Update with your backend URL
  private supplierUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  addSupplier(supplier: SupplierToAdd ): Observable<any> {
      return this.http.post(this.apiUrl, supplier);
    }

    getSuppliers() : Observable<any> {
      return this.http.get(this.apiUrl);
    }

    updateSupplier(id: any, supplier: any) {
      return this.http.put(`${this.apiUrl}/${id}`, supplier);
    }

    deleteSupplier(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Notify that a supplier was updated
  notifySupplierUpdated(): void {
    this.supplierUpdatedSubject.next();
  }

  // Observable for components to subscribe to update notifications
  onSupplierUpdated(): Observable<void> {
    return this.supplierUpdatedSubject.asObservable();
  }
}
