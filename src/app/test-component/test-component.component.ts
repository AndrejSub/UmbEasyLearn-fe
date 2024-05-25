import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {resultDto, testsDto} from "../dtos/tests";
import {TestsService} from "../services/tests.service";
import {StepperModule} from "primeng/stepper";
import {ButtonModule} from "primeng/button";
import {FlashcardComponent} from "../flashcard/flashcard.component";
import {TextquestionComponent} from "../textquestion/textquestion.component";
import {AbcquestionComponent} from "../abcquestion/abcquestion.component";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    StepperModule,
    ButtonModule,
    FlashcardComponent,
    TextquestionComponent,
    AbcquestionComponent,
    RouterLink,
  ],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent implements OnInit,OnChanges{
  id: string|null = null;
  private readonly route = inject(ActivatedRoute)
  tests:testsDto[] = []

  result: resultDto = {
    email: "",
    testID: "",
    subjectId: "",
    testName: "",
    subjectName: "",
    correctAnswers: "",
    questionsCount: ""
  }

  constructor(
      protected testsService: TestsService,
      private testService: TestsService,
      private api: ApiService
  ) {
    this.id = this.route.snapshot.paramMap.get('idTestu');
    console.log("this ID "+ this.id);
  }

  nextBool:boolean = this.testsService.goNext

  ngOnInit() {
    this.testsService.getTestByTestId('tests', this.id)
        .subscribe((tests: testsDto[]) => {
          this.tests = tests;
        });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.nextBool = this.testsService.goNext
  }
  SendResults(): void{
    this.result.testID = this.tests[0].testID
    this.result.testName = this.tests[0].testName
    // @ts-ignore
    this.result.email = localStorage.getItem("userEmail")
    this.result.subjectId = this.tests[0].subjectID
    this.result.correctAnswers = this.testService.getNumberOfCorrectAnswers().toString()
    this.result.questionsCount = this.testService.getNumerOfAllQuestions().toString()
    this.api.sendTestResult(this.result).subscribe((res) =>{
      console.log("poslal som")
    } )
    console.log(this.result);
  }

  GetTestMessages(): any{
    if(this.testService.getNumberOfCorrectAnswers() > this.testService.getNumerOfAllQuestions() /2){
      return `Gratulujem tento test si zvladol úspšene počet bodov ${this.testService.getNumberOfCorrectAnswers()} z ${this.testService.getNumerOfAllQuestions()}!`

  }return `Odporúčame ti zopakovať si tento test počet bodov: ${this.testService.getNumberOfCorrectAnswers()} z ${this.testService.getNumerOfAllQuestions()}!`
  }

}
