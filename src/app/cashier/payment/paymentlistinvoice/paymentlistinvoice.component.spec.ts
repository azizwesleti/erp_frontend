import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentlistinvoiceComponent } from './paymentlistinvoice.component';

describe('PaymentlistinvoiceComponent', () => {
  let component: PaymentlistinvoiceComponent;
  let fixture: ComponentFixture<PaymentlistinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentlistinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentlistinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
