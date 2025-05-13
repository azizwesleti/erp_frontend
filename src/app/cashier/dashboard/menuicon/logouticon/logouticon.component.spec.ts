import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogouticonComponent } from './logouticon.component';

describe('LogouticonComponent', () => {
  let component: LogouticonComponent;
  let fixture: ComponentFixture<LogouticonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogouticonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogouticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
