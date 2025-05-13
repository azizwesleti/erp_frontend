import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftmessageComponent } from './draftmessage.component';

describe('DraftmessageComponent', () => {
  let component: DraftmessageComponent;
  let fixture: ComponentFixture<DraftmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
