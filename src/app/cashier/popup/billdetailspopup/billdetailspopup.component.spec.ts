import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilldetailspopupComponent } from './billdetailspopup.component';

describe('BilldetailspopupComponent', () => {
  let component: BilldetailspopupComponent;
  let fixture: ComponentFixture<BilldetailspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilldetailspopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilldetailspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
