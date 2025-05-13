import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrolepermissionComponent } from './reportrolepermission.component';

describe('ReportrolepermissionComponent', () => {
  let component: ReportrolepermissionComponent;
  let fixture: ComponentFixture<ReportrolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportrolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportrolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
