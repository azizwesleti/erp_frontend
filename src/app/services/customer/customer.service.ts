import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiConstant } from 'src/app/constant/api-constants';
import { Customer, CustomerToAdd } from 'src/app/interfaces/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = environment.apiUrl + ApiConstant.customers;
  private customerUpdatedSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  addCustomer(customer: CustomerToAdd): Observable<Customer> {
    console.log('Sending customer data:', customer);
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  updateCustomer(id: string, customer: Partial<CustomerToAdd>): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  notifyCustomerUpdated(): void {
    this.customerUpdatedSubject.next();
  }

  get customerUpdated$(): Observable<void> {
    return this.customerUpdatedSubject.asObservable();
  }
  
  getCustomer(id: string): Observable<Customer> {
  return this.http.get<Customer>(`${this.apiUrl}/${id}`);
}
}