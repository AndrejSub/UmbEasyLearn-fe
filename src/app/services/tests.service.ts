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

  points:number = 0;
  goNext:boolean =  false;

  get = (url:string): Observable<SubjectsDto[]> =>{
    return this.apiSerivce.get(url)
  }
  getTestsHistory = (url: string): Observable<resultDto[]> => {
    return this.apiSerivce.getResults(url);
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
    console.log(this.points)
    this.next()
  }

  wrongAnswer(){
    this.next()
  }






}
