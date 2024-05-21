import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {SubjectsDto} from "../dtos/subjectsDto";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
      private apiSerivce: ApiService
  ) { }

  getSubjects(): Observable<SubjectsDto[]> {
    return this.apiSerivce.get("subjects")
  }
}
