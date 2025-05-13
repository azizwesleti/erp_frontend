import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyoverviewpopupComponent } from './companyoverviewpopup.component';

describe('CompanyoverviewpopupComponent', () => {
  let component: CompanyoverviewpopupComponent;
  let fixture: ComponentFixture<CompanyoverviewpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyoverviewpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyoverviewpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
