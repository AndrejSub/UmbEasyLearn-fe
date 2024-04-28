import {Component, Input} from '@angular/core';
import {TestsService} from "../services/tests.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-textquestion',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './textquestion.component.html',
  styleUrl: './textquestion.component.scss'
})
export class TextquestionComponent {
  constructor(
      private testsService:TestsService
  ) {
  }

  @Input() question:string = "";
  @Input() answer:string = "";

  userAnswer:string | undefined|null = ""


  showAnswer:boolean = false;

  end:boolean = false;

  loginForm = new FormGroup({
    odpoved: new FormControl('', [Validators.required]),
  })


  showBackSide(){
    this.userAnswer = this.loginForm.get("odpoved")?.value
    this.showAnswer = true

  }

  correctAnswer(){
    this.testsService.correctAnswer()
    this.end=true
  }

  wrongAnswer(){
    this.testsService.wrongAnswer()
    this.end=true
  }

}
