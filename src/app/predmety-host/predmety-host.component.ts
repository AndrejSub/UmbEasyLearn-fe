import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TestsService} from "../services/tests.service";
import {testsDto} from "../dtos/tests";

@Component({
  selector: 'app-predmety-host',
  standalone: true,
  imports: [],
  templateUrl: './predmety-host.component.html',
  styleUrl: './predmety-host.component.scss'
})
export class PredmetyHostComponent implements OnInit{

  id: string|null = null;
  private readonly route = inject(ActivatedRoute)
  tests:testsDto[] = []
  constructor( private testsService: TestsService) {
    this.id = this.route.snapshot.paramMap.get('idPredmetu');
    console.log(this.id);
    // Ziskaj zoznam testov pre predmet {idPredmetu}
  }


  ngOnInit() {
    this.testsService.getTestsById("tests",this.id)
        .subscribe(
        (tests:testsDto[])=>{this.tests =tests})
  }
}
