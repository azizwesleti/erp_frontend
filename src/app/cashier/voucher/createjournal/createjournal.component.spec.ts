import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatejournalComponent } from './createjournal.component';

describe('CreatejournalComponent', () => {
  let component: CreatejournalComponent;
  let fixture: ComponentFixture<CreatejournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatejournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatejournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
