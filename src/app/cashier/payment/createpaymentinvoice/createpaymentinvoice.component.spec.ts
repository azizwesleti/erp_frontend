import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepaymentinvoiceComponent } from './createpaymentinvoice.component';

describe('CreatepaymentinvoiceComponent', () => {
  let component: CreatepaymentinvoiceComponent;
  let fixture: ComponentFixture<CreatepaymentinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepaymentinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepaymentinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
