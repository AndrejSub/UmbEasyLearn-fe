import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {QuestionAnswerControlComponent} from "./question-answer-control/question-answer-control.component";
import {AbcControlComponent} from "./abc-control/abc-control.component";
import {SubjectsService} from "../../services/subjects.service";
import {TestsService} from "../../services/tests.service";
import {PraktickeControlComponent} from "./prakticke-control/prakticke-control.component";

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AbcControlComponent,
    NgForOf,
    QuestionAnswerControlComponent,
    AsyncPipe,
    NgIf,
    PraktickeControlComponent
  ],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.scss'
})
export class ExamFormComponent {
  fb = inject(FormBuilder);
  form: FormGroup;
  saveTest$ = new BehaviorSubject(false);

  flashCards: Array<string> = [];
  textQuestions: Array<string> = [];
  practicalQuestions: Array<string> = [];
  abcQuestions: Array<string> = [];

  subjects$ = inject(SubjectsService).getSubjects();

  testService = inject(TestsService);

  loading = false;

  constructor() {
    this.form = this.fb.group({
      testName: new FormControl('', Validators.required),
      subjectID: new FormControl(''),
      flashCards: new FormControl([]),
      textQuestions: new FormControl([]),
      practicalQuestions: new FormControl([]),
      abcQuestions: new FormControl([])
    })
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
    this.loading = true
    this.saveTest$.next(true)
    setTimeout(()=>{
        this.testService.createNewTest(this.form.value).subscribe(
            ()=>
            {this.loading = false
              this.form.reset()
              this.abcQuestions = []
              this.flashCards = [];
              this.practicalQuestions = [];
              this.textQuestions = [];
            }
        );
    },200)

  }



}
