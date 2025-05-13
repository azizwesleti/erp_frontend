import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetincomereportComponent } from './netincomereport.component';

describe('NetincomereportComponent', () => {
  let component: NetincomereportComponent;
  let fixture: ComponentFixture<NetincomereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetincomereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetincomereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
