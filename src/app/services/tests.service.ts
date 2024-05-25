import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {SubjectsDto} from "../dtos/subjectsDto";
import {resultDto, testsDto} from "../dtos/tests";

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(
      private apiSerivce: ApiService
  ) { }
  allPoints: number = 0;
  points:number = 0;
  goNext:boolean =  false;

  get = (url:string): Observable<SubjectsDto[]> =>{
    return this.apiSerivce.get(url)
  }
  getTestsHistory = (email: string): Observable<resultDto[]> => {
    return this.apiSerivce.getResultsByEmail(email)
  }
  getTestsById = (url:string, id: string|null): Observable<testsDto[]> => {
    return this.apiSerivce.getById(url,id);
  }
  getTestByTestId = (url: string, id: string|null): Observable<testsDto[]> => {
    return this.apiSerivce.getByTestId(url, id);
  }

  next(){
    this.goNext = true
  }

  setFalse(){
    this.goNext = false
  }

  correctAnswer(){
    this.points++
    this.allPoints++
    console.log(this.points)
    console.log("all points:" + this.allPoints)
    this.next()
  }

  wrongAnswer(){
    this.next()
    this.allPoints++
    console.log("all points:" + this.allPoints)
  }

  createNewTest(test:testsDto){
    return this.apiSerivce.post("tests", test)
  }

  getNumberOfCorrectAnswers(): number{
    return this.points;
  }
  getNumerOfAllQuestions(): number{
    return this.allPoints;
  }
}
