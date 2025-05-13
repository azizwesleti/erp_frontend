import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageiconComponent } from './languageicon.component';

describe('LanguageiconComponent', () => {
  let component: LanguageiconComponent;
  let fixture: ComponentFixture<LanguageiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
