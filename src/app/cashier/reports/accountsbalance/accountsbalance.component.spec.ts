import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsbalanceComponent } from './accountsbalance.component';

describe('AccountsbalanceComponent', () => {
  let component: AccountsbalanceComponent;
  let fixture: ComponentFixture<AccountsbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsbalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
