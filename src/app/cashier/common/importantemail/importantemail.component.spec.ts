import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantemailComponent } from './importantemail.component';

describe('ImportantemailComponent', () => {
  let component: ImportantemailComponent;
  let fixture: ComponentFixture<ImportantemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
