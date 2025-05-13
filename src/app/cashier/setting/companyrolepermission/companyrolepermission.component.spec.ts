import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyrolepermissionComponent } from './companyrolepermission.component';

describe('CompanyrolepermissionComponent', () => {
  let component: CompanyrolepermissionComponent;
  let fixture: ComponentFixture<CompanyrolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyrolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyrolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
