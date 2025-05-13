import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleddArticleComponent } from './add-articledd-article.component';

describe('AddArticleddArticleComponent', () => {
  let component: AddArticleddArticleComponent;
  let fixture: ComponentFixture<AddArticleddArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddArticleddArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddArticleddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
