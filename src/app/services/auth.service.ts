import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {loginDto, valid} from "../dtos/UserDto";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private httpClient: HttpClient
  ) { }

  getToken = (userDto: loginDto): any =>{
    return this.httpClient.post("http://localhost:8222/auth/token", userDto);
  }

  validateToken(): Observable<valid> {
    return this.httpClient.get<valid>(`http://localhost:8222/auth/validate?token=${localStorage.getItem("loginToken")}`)
  }
}
