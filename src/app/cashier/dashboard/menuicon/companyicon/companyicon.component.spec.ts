import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyiconComponent } from './companyicon.component';

describe('CompanyiconComponent', () => {
  let component: CompanyiconComponent;
  let fixture: ComponentFixture<CompanyiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
