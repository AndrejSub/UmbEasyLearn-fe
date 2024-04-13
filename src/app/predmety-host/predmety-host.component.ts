import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {TestsService} from "../services/tests.service";
import {testsDto} from "../dtos/tests";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-predmety-host',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './predmety-host.component.html',
  styleUrl: './predmety-host.component.scss'
})
export class PredmetyHostComponent implements OnInit{

  id: string|null = null;
  private readonly route = inject(ActivatedRoute)
  tests:testsDto[] = []
  // flashCards: FlashCards[] = [];
  constructor( private testsService: TestsService) {
    this.id = this.route.snapshot.paramMap.get('idPredmetu');
    console.log(this.id);
    // Ziskaj zoznam testov pre predmet {idPredmetu}
  }
  ngOnInit() {
    this.testsService.getTestsById('tests', this.id)
        .subscribe((tests: testsDto[]) => {
          this.tests = tests;
        });
  }
}
