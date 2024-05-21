import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerControlComponent } from './question-answer-control.component';

describe('QuestionAnswerControlComponent', () => {
  let component: QuestionAnswerControlComponent;
  let fixture: ComponentFixture<QuestionAnswerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionAnswerControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionAnswerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
