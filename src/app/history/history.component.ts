import { Component } from '@angular/core';
import {TestsService} from "../services/tests.service";
import {resultDto, testsDto} from "../dtos/tests";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  constructor(private testService: TestsService) {
  }
  testResults: resultDto[] = []

    async ngOnInit(): Promise<any>{

    // @ts-ignore
      this.testService.getTestsHistory(localStorage.getItem("userEmail")).subscribe((res: resultDto[]) => {
      this.testResults = res;
    })
  }
}
