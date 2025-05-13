import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherrolepermissionComponent } from './voucherrolepermission.component';

describe('VoucherrolepermissionComponent', () => {
  let component: VoucherrolepermissionComponent;
  let fixture: ComponentFixture<VoucherrolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherrolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherrolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
