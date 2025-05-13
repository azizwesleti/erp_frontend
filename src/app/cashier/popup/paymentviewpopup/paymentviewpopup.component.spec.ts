import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentviewpopupComponent } from './paymentviewpopup.component';

describe('PaymentviewpopupComponent', () => {
  let component: PaymentviewpopupComponent;
  let fixture: ComponentFixture<PaymentviewpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentviewpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentviewpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
