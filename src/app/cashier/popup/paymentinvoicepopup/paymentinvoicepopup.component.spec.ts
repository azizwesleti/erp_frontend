import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentinvoicepopupComponent } from './paymentinvoicepopup.component';

describe('PaymentinvoicepopupComponent', () => {
  let component: PaymentinvoicepopupComponent;
  let fixture: ComponentFixture<PaymentinvoicepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentinvoicepopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentinvoicepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
