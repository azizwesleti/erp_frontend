import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplerolepermissionComponent } from './peoplerolepermission.component';

describe('PeoplerolepermissionComponent', () => {
  let component: PeoplerolepermissionComponent;
  let fixture: ComponentFixture<PeoplerolepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplerolepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplerolepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
