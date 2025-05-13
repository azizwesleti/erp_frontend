import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaymentpopupComponent } from './addpaymentpopup.component';

describe('AddpaymentpopupComponent', () => {
  let component: AddpaymentpopupComponent;
  let fixture: ComponentFixture<AddpaymentpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpaymentpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaymentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
