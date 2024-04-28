import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextquestionComponent } from './textquestion.component';

describe('TextquestionComponent', () => {
  let component: TextquestionComponent;
  let fixture: ComponentFixture<TextquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextquestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
