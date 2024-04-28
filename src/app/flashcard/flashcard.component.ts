import {Component, Input, input} from '@angular/core';
import {NgIf} from "@angular/common";
import {TestsService} from "../services/tests.service";

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent {
  constructor(
      private testsService:TestsService
  ) {
  }

  @Input() question:string = "";
  @Input() answer:string = "";


  showAnswer:boolean = false;

  end:boolean = false;


  showBackSide(){
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
