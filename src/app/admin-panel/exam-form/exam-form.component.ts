import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgForOf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {QuestionAnswerControlComponent} from "./question-answer-control/question-answer-control.component";
import {AbcControlComponent} from "./abc-control/abc-control.component";

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AbcControlComponent,
    NgForOf,
    QuestionAnswerControlComponent,
    AsyncPipe
  ],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.scss'
})
export class ExamFormComponent {
  fb = inject(FormBuilder);
  form: FormGroup;
  saveTest$ = new BehaviorSubject(false);
  private readonly route = inject(ActivatedRoute)

  flashCards: Array<string> = [];
  textQuestions: Array<string> = [];
  practicalQuestions: Array<string> = [];
  abcQuestions: Array<string> = [];

  constructor() {
    this.form = this.fb.group({
      testName: new FormControl('', Validators.required),
      subjectID: new FormControl(''),
      flashCards: new FormControl([]),
      textQuestions: new FormControl([]),
      practicalQuestions: new FormControl([]),
      abcQuestions: new FormControl([])
    })
    this.form.controls.subjectID.patchValue(
        this.route.snapshot.paramMap.get('idPredmetu')
    );
  }

  createFlashCard() {
    this.flashCards.push('');
  }

  createTextQuestion() {
    this.textQuestions.push('');
  }

  createPracticalQuestion() {
    this.practicalQuestions.push('');
  }

  createAbcQuestion() {
    this.abcQuestions.push('');
  }

  addQuestion(x: string, value: Record<string, string>) {
    this.form.controls[x].value.push(value)
  }

  saveForm() {
    this.saveTest$.next(true)
    console.log(this.form.value);
  }
}
