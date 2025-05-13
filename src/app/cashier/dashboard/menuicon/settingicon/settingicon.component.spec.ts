import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingiconComponent } from './settingicon.component';

describe('SettingiconComponent', () => {
  let component: SettingiconComponent;
  let fixture: ComponentFixture<SettingiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
