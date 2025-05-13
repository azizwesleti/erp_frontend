import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingrolepermissionComponent } from './settingrolepermission.component';

describe('SettingrolepermissionComponent', () => {
  let component: SettingrolepermissionComponent;
  let fixture: ComponentFixture<SettingrolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingrolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingrolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
