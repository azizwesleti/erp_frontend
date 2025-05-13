import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearenceiconComponent } from './appearenceicon.component';

describe('AppearenceiconComponent', () => {
  let component: AppearenceiconComponent;
  let fixture: ComponentFixture<AppearenceiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppearenceiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearenceiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
