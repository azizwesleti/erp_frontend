import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashemailComponent } from './trashemail.component';

describe('TrashemailComponent', () => {
  let component: TrashemailComponent;
  let fixture: ComponentFixture<TrashemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
