import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditvoucherpopupComponent } from './creditvoucherpopup.component';

describe('CreditvoucherpopupComponent', () => {
  let component: CreditvoucherpopupComponent;
  let fixture: ComponentFixture<CreditvoucherpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditvoucherpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditvoucherpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
