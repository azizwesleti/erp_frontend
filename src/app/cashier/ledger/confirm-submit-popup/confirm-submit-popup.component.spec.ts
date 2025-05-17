import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSubmitPopupComponent } from './confirm-submit-popup.component';

describe('ConfirmSubmitPopupComponent', () => {
  let component: ConfirmSubmitPopupComponent;
  let fixture: ComponentFixture<ConfirmSubmitPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmSubmitPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmSubmitPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
