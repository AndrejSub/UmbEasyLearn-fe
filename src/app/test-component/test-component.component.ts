import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {testsDto} from "../dtos/tests";
import {TestsService} from "../services/tests.service";
import {StepperModule} from "primeng/stepper";
import {ButtonModule} from "primeng/button";
import {FlashcardComponent} from "../flashcard/flashcard.component";
import {TextquestionComponent} from "../textquestion/textquestion.component";
import {AbcquestionComponent} from "../abcquestion/abcquestion.component";

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


  constructor(protected testsService: TestsService) {
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

}
