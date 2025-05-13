import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerrolepermissionComponent } from './ledgerrolepermission.component';

describe('LedgerrolepermissionComponent', () => {
  let component: LedgerrolepermissionComponent;
  let fixture: ComponentFixture<LedgerrolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerrolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerrolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
