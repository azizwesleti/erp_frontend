import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditvoucherComponent } from './creditvoucher.component';

describe('CreditvoucherComponent', () => {
  let component: CreditvoucherComponent;
  let fixture: ComponentFixture<CreditvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
