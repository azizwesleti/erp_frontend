import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitvoucherpopupComponent } from './debitvoucherpopup.component';

describe('DebitvoucherpopupComponent', () => {
  let component: DebitvoucherpopupComponent;
  let fixture: ComponentFixture<DebitvoucherpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitvoucherpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitvoucherpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
