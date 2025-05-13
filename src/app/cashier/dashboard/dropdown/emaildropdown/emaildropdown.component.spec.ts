import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildropdownComponent } from './emaildropdown.component';

describe('EmaildropdownComponent', () => {
  let component: EmaildropdownComponent;
  let fixture: ComponentFixture<EmaildropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaildropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaildropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
