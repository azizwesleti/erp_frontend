import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileiconComponent } from './editprofileicon.component';

describe('EditprofileiconComponent', () => {
  let component: EditprofileiconComponent;
  let fixture: ComponentFixture<EditprofileiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofileiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
