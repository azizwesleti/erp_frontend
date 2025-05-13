import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardiconComponent } from './forwardicon.component';

describe('ForwardiconComponent', () => {
  let component: ForwardiconComponent;
  let fixture: ComponentFixture<ForwardiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
