import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanypopupComponent } from './addcompanypopup.component';

describe('AddcompanypopupComponent', () => {
  let component: AddcompanypopupComponent;
  let fixture: ComponentFixture<AddcompanypopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcompanypopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
