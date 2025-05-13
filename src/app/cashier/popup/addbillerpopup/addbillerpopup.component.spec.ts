import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbillerpopupComponent } from './addbillerpopup.component';

describe('AddbillerpopupComponent', () => {
  let component: AddbillerpopupComponent;
  let fixture: ComponentFixture<AddbillerpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbillerpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbillerpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
