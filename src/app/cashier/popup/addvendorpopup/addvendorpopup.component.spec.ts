import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvendorpopupComponent } from './addvendorpopup.component';

describe('AddvendorpopupComponent', () => {
  let component: AddvendorpopupComponent;
  let fixture: ComponentFixture<AddvendorpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvendorpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvendorpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
