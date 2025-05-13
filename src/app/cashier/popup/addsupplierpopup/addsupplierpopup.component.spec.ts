import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsupplierpopupComponent } from './addsupplierpopup.component';

describe('AddsupplierpopupComponent', () => {
  let component: AddsupplierpopupComponent;
  let fixture: ComponentFixture<AddsupplierpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsupplierpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsupplierpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
