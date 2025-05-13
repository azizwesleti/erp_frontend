import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxemailComponent } from './inboxemail.component';

describe('InboxemailComponent', () => {
  let component: InboxemailComponent;
  let fixture: ComponentFixture<InboxemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
