import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-prakticke-control',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './prakticke-control.component.html',
  styleUrl: './prakticke-control.component.scss'
})
export class PraktickeControlComponent {
  @Output() addQuestion = new EventEmitter<Record<string, string>>();

  form = inject(FormBuilder).group({
    zadanie: new FormControl('', Validators.required),
    riesenie: new FormControl('', Validators.required),
  })

  @Input()
  set saveTest(x:boolean | null){
    if (x === true) {
      this.addQuestion.emit(this.form.value as Record<string, string>)
    }
  }
}
