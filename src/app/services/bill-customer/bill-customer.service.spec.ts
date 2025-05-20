import { TestBed } from '@angular/core/testing';

import { BillCustomerService } from './bill-customer.service';

describe('BillCustomerService', () => {
  let service: BillCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
