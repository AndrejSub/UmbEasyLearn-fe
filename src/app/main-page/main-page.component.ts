import {Component, OnInit} from '@angular/core';
import {SubjectsService} from "../services/subjects.service"
import {SubjectsDto} from "../dtos/subjectsDto";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  constructor(
      private subjectsService: SubjectsService
  ) { }

  subjects: SubjectsDto[] = []

  ngOnInit():void{
    this.subjectsService.getSubjects("http://localhost:8222/api/subjects")
        .subscribe(
            (subjects : SubjectsDto[] ) =>{this.subjects = subjects})
  }

}
