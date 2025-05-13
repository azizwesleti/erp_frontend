import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomerpopupComponent } from './addcustomerpopup.component';

describe('AddcustomerpopupComponent', () => {
  let component: AddcustomerpopupComponent;
  let fixture: ComponentFixture<AddcustomerpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcustomerpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
