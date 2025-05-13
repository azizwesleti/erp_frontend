import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomechartsComponent } from './incomecharts.component';

describe('IncomechartsComponent', () => {
  let component: IncomechartsComponent;
  let fixture: ComponentFixture<IncomechartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomechartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
