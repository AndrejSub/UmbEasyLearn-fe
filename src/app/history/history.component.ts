import { Component } from '@angular/core';
import {TestsService} from "../services/tests.service";
import {resultDto, testsDto} from "../dtos/tests";

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  constructor(private testService: TestsService) {
  }
  testResults: resultDto[] = []

    async ngOnInit(): Promise<any>{
    this.testService.getTestsHistory("...").subscribe((res: resultDto[]) => {
      this.testResults = res;
    })
  }
}
