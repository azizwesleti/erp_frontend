import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraddbillComponent } from './customeraddbill.component';

describe('CustomeraddbillComponent', () => {
  let component: CustomeraddbillComponent;
  let fixture: ComponentFixture<CustomeraddbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeraddbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeraddbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
