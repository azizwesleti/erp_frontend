import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendbillpopupComponent } from './sendbillpopup.component';

describe('SendbillpopupComponent', () => {
  let component: SendbillpopupComponent;
  let fixture: ComponentFixture<SendbillpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendbillpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendbillpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
