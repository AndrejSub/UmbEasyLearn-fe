import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {useravatar} from "../dtos/UserDto";

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
  getByTestId<T>(url:string, id:string|null): Observable<T>{
    return this.httpClient.get<T>(`http://localhost:8222/api/${url}/TID=${id}`)
  }
  getByEmail<T>(email:string):Observable<T>{
    return this.httpClient.get<T>(`http://localhost:8222/users/${email}`)
  }

  post(url: string, value: any): Observable<void> {
    return this.httpClient.post<void>(`http://localhost:8222/api/${url}`, value);
  }
  // patchByEmail<T>(email:string, userDTO:useravatar):Observable<T>{
  //   return this.httpClient.patch<T>(`http://localhost:8222/users/${email}`, userDTO)
  // }

}
