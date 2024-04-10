import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {SubjectsDto} from "../dtos/subjectsDto";
import {testsDto} from "../dtos/tests";

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(
      private apiSerivce: ApiService
  ) { }

  get = (url:string): Observable<SubjectsDto[]> =>{
    return this.apiSerivce.get(url)
  }
  
  getTestsById = (url:string, id: string|null): Observable<testsDto[]> => {
    return this.apiSerivce.getById(url,id);
  }
}
