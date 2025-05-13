import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateledgerComponent } from './createledger.component';

describe('CreateledgerComponent', () => {
  let component: CreateledgerComponent;
  let fixture: ComponentFixture<CreateledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateledgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
