import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {resultDto, testsDto} from "../dtos/tests";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
      private httpClient: HttpClient
  ) { }

  get<T>(url: string): Observable<T>{
    return this.httpClient.get<T>("http://localhost:8222/api/"+url) ;
  }
  getResultsByEmail<T>(email: string): Observable<T>{
    return this.httpClient.get<T>(`http://localhost:8222/api/testhistory/email=${email}`);
  }
  sendTestResult<T>(testResult: resultDto) : Observable<T> {
    return this.httpClient.post<T>("http://localhost:8222/api/testhistory",testResult)
  }
  getById<T>(url:string,id:string|null): Observable<T>{
    return this.httpClient.get<T>(`http://localhost:8222/api/${url}/ID=${id}`);
  }
  getByTestId<T>(url:string, id:string|null): Observable<T>{
    return this.httpClient.get<T>(`http://localhost:8222/api/${url}/TID=${id}`)
  }
  getByEmail<T>(email:string):Observable<T>{
    return this.httpClient.get<T>(`http://localhost:8222/users/${email}`)
  }
  // patchByEmail<T>(email:string, userDTO:useravatar):Observable<T>{
  //   return this.httpClient.patch<T>(`http://localhost:8222/users/${email}`, userDTO)
  // }

}
