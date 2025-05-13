import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyiconComponent } from './replyicon.component';

describe('ReplyiconComponent', () => {
  let component: ReplyiconComponent;
  let fixture: ComponentFixture<ReplyiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
