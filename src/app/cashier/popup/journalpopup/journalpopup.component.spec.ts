import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalpopupComponent } from './journalpopup.component';

describe('JournalpopupComponent', () => {
  let component: JournalpopupComponent;
  let fixture: ComponentFixture<JournalpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
