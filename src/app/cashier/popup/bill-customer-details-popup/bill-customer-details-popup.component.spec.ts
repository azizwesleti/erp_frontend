import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCustomerDetailsPopupComponent } from './bill-customer-details-popup.component';

describe('BillCustomerDetailsPopupComponent', () => {
  let component: BillCustomerDetailsPopupComponent;
  let fixture: ComponentFixture<BillCustomerDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillCustomerDetailsPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillCustomerDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
