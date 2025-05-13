import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantmessageComponent } from './importantmessage.component';

describe('ImportantmessageComponent', () => {
  let component: ImportantmessageComponent;
  let fixture: ComponentFixture<ImportantmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
