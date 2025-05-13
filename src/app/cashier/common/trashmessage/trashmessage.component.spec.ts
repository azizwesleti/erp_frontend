import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashmessageComponent } from './trashmessage.component';

describe('TrashmessageComponent', () => {
  let component: TrashmessageComponent;
  let fixture: ComponentFixture<TrashmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
