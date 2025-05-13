import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebankComponent } from './createbank.component';

describe('CreatebankComponent', () => {
  let component: CreatebankComponent;
  let fixture: ComponentFixture<CreatebankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
