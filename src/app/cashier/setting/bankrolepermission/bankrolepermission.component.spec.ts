import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankrolepermissionComponent } from './bankrolepermission.component';

describe('BankrolepermissionComponent', () => {
  let component: BankrolepermissionComponent;
  let fixture: ComponentFixture<BankrolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankrolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankrolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
