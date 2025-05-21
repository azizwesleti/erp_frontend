import { TestBed } from '@angular/core/testing';

import { PurchaseClientService } from './purchase-client.service';

describe('PurchaseClientService', () => {
  let service: PurchaseClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
