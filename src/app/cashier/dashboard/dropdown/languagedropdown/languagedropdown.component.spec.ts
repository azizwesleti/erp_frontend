import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagedropdownComponent } from './languagedropdown.component';

describe('LanguagedropdownComponent', () => {
  let component: LanguagedropdownComponent;
  let fixture: ComponentFixture<LanguagedropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagedropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
