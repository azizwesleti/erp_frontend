import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermanagebillComponent } from './customermanagebill.component';

describe('CustomermanagebillComponent', () => {
  let component: CustomermanagebillComponent;
  let fixture: ComponentFixture<CustomermanagebillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomermanagebillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomermanagebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
