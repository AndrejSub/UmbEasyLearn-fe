import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-abc-control',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './abc-control.component.html',
  styleUrl: './abc-control.component.scss'
})
export class AbcControlComponent {
  @Output() addQuestion = new EventEmitter<Record<string, string>>();

  form = inject(FormBuilder).group({
    question: new FormControl('', Validators.required),
    correctAnswer: new FormControl('', Validators.required),
    a: new FormControl(''),
    b: new FormControl(''),
    c: new FormControl('')
  })

  @Input()
  set saveTest(x:boolean | null){
    if (x === true) {
      this.addQuestion.emit(this.form.value as Record<string, string>)
    }
  }
}
