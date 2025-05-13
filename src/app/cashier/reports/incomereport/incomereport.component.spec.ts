import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomereportComponent } from './incomereport.component';

describe('IncomereportComponent', () => {
  let component: IncomereportComponent;
  let fixture: ComponentFixture<IncomereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
