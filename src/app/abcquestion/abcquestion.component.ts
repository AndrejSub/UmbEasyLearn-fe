import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TestsService} from "../services/tests.service";

@Component({
  selector: 'app-abcquestion',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './abcquestion.component.html',
  styleUrl: './abcquestion.component.scss'
})
export class AbcquestionComponent {
    constructor(
        private testsService:TestsService
    ) {
    }

    @Input() question:string = "";
    @Input() answer:string = "";
    @Input() a =""
    @Input() b =""
    @Input() c =""


    selectedOption: string =""

    userAnswer:string | undefined|null = ""


    showAnswer:boolean = false;
    correct :boolean = false;
    end:boolean = false;


    showBackSide(){
        console.log(this.selectedOption,this.answer)
        if(this.selectedOption === this.answer){
            this.correct = true;
            this.correctAnswer()

        } else {
            this.wrongAnswer()
        }
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
