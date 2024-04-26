import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {loginDto, registerDto, valid} from "../dtos/UserDto";
import { Observable} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private httpClient: HttpClient,
      private router: Router
  ) {
  }

  getToken = (userDto: loginDto): any => {
    return this.httpClient.post("http://localhost:8222/auth/token", userDto);
  }

  createUser = (userDto: registerDto): Observable<any> => {
    return this.httpClient.post("http://localhost:8222/auth/register", userDto);
  }

  validateToken(): Observable<valid> {
    return this.httpClient.get<valid>(`http://localhost:8222/auth/validate?token=${localStorage.getItem("loginToken")}`)
  }

  logIn(loginDto: any) {
    this.getToken(loginDto).subscribe((res:any) =>{

      if(res.result){
        //Ak sa podarilo prihlasit
        localStorage.setItem("loginToken",res.token)
        this.router.navigateByUrl("")
        // this.loginService.logIn()
      }else{

      }

    })
  }
}
