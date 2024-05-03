import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {loginDto, registerDto, useravatar, valid} from "../dtos/UserDto";
import { Observable} from "rxjs";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private httpClient: HttpClient,
      private router: Router,
      private toastr: ToastrService
  ) {
  }

  getToken = (userDto: loginDto):Observable<any> => {
    return this.httpClient.post("http://localhost:8222/auth/token", userDto);
  }

  createUser = (userDto: registerDto): Observable<any> => {
    return this.httpClient.post("http://localhost:8222/auth/register", userDto);
  }

  validateToken(): Observable<valid> {
    return this.httpClient.get<valid>(`http://localhost:8222/auth/validate?token=${localStorage.getItem("loginToken")}`)
  }

  changePassword(loginDto:loginDto) : Observable<any> {
    return this.httpClient.post("http://localhost:8222/auth/changepassword",loginDto)
  }
  changePhoto(userinfo:useravatar) : Observable<any> {
    return this.httpClient.post("http://localhost:8222/users/update",userinfo)
  }

  logout(){
    localStorage.removeItem("loginToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("avatarImg");
  }

  logIn(loginDto: any) {
    this.getToken(loginDto).subscribe((res:any) =>{

      if(res.result){
        //Ak sa podarilo prihlasit
        localStorage.setItem("loginToken",res.token)
        localStorage.setItem("userEmail",loginDto.email)
        this.toastr.success("Login Successfully")
        this.router.navigateByUrl("").then(() => {
          window.location.reload();
        });
        // this.loginService.logIn()
      }
    } ,error =>{
      this.toastr.warning("Wrong email or password")
    })
  }

  isAdmin() {
    return false;
  }
}
