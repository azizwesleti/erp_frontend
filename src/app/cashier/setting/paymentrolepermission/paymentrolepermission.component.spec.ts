import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentrolepermissionComponent } from './paymentrolepermission.component';

describe('PaymentrolepermissionComponent', () => {
  let component: PaymentrolepermissionComponent;
  let fixture: ComponentFixture<PaymentrolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentrolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentrolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
