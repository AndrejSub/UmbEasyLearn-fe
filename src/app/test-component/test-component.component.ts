import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {testsDto} from "../dtos/tests";
import {TestsService} from "../services/tests.service";

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent implements OnInit{
  id: string|null = null;
  private readonly route = inject(ActivatedRoute)
  tests:testsDto[] = []
  constructor( private testsService: TestsService) {
    this.id = this.route.snapshot.paramMap.get('idTestu');
    console.log("this ID "+ this.id);
  }
  ngOnInit() {
    this.testsService.getTestByTestId('tests', this.id)
        .subscribe((tests: testsDto[]) => {
          this.tests = tests;
        });
  }
}
