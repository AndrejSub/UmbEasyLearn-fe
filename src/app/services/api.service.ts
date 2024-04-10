import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  getById<T>(url:string,id:string|null): Observable<T>{
    return this.httpClient.get<T>(`http://localhost:8222/api/${url}/ID=${id}`);
  }
}
