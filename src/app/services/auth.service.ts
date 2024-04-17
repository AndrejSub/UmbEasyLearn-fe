import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {loginDto} from "../dtos/UserDto";


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
}
