import {Component, OnInit} from '@angular/core';
import {SubjectsService} from "../services/subjects.service"
import {SubjectsDto} from "../dtos/subjectsDto";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  constructor(
      private subjectsService: SubjectsService,
      private loginService: LoginService
  ) { }

  subjects: SubjectsDto[] = []

  logedIn:boolean = false;
  async ngOnInit(): Promise<any> {
    if (await this.loginService.logIn()) {
      this.logedIn= true;
      this.subjectsService.getSubjects("subjects")
          .subscribe(
              (subjects: SubjectsDto[]) => {
                this.subjects = subjects
              })
    }
  }
}
