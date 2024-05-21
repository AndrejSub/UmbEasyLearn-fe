import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-question-answer-control',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './question-answer-control.component.html',
  styleUrl: './question-answer-control.component.scss'
})
export class QuestionAnswerControlComponent {
  @Output() addQuestion = new EventEmitter<Record<string, string>>();

  form = inject(FormBuilder).group({
    question: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
  })

  @Input()
  set saveTest(x:boolean | null){
    if (x === true) {
      this.addQuestion.emit(this.form.value as Record<string, string>)
    }
  }

}
