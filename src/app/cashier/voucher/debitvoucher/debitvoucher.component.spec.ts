import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitvoucherComponent } from './debitvoucher.component';

describe('DebitvoucherComponent', () => {
  let component: DebitvoucherComponent;
  let fixture: ComponentFixture<DebitvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
