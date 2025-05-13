import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftemailComponent } from './draftemail.component';

describe('DraftemailComponent', () => {
  let component: DraftemailComponent;
  let fixture: ComponentFixture<DraftemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
